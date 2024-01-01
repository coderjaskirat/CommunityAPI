const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
        required: [true, "User name is required"]
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true,
        minLength: 6
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

module.exports = mongoose.model('User', userSchema);