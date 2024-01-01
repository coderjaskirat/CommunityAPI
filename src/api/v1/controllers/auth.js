require('dotenv').config();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { minNameLength, minPasswordLength } = require('../validations/user');

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(name.length < minNameLength) {
            res.status(400).json({
                status: false,
                content: {
                    param: "name",
                    message: "Name should be at least 2 characters.",
                    code: "INVALID_INPUT"
                }
            });
        }

        if(password.length < minPasswordLength) {
            res.status(400).json({
                status: false,
                content: {
                    param: "password",
                    message: "Password should be at least 6 characters.",
                    code: "INVALID_INPUT"
                }
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password : hashedPassword
        });
        try{
            user.save();
        } catch (e) {
            res.status(400).json({
                success: false,
                error: e.message
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.status(201).json({
            success: true,
            content: {
                data: {
                    _id : user._id,
                    name: user.name,
                    email: user.email,
                    created_at: user.created_at
                },
                meta: {
                    access_token: token,
                }
            }
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.find({ email: email });

        const checkPassword = await bcrypt.compare(password, user[0].password);
        if (!checkPassword) {
            throw new Error('Password is not correct');
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.status(200).json({
            success: true,
            content: {
                data: {
                    _id: user[0]._id,
                    name: user[0].name,
                    email: user[0].email,
                    created_at: user[0].created_at
                },
                meta: {
                    access_token: token,
                }
            }
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user);
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

module.exports = { signUp, signIn, getMe };