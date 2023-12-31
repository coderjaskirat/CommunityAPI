const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "User password is required"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});