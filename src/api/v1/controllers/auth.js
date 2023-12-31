const User = require('../models/user');

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password
        });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });
        res.status(201).json({
            success: true,
            token
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });
        res.status(200).json({
            success: true,
            token
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