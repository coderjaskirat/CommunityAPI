const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Role name is required"],
        unique: true,
        minLength: [2, "Name should be at least 2 characters."],
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Role', roleSchema);