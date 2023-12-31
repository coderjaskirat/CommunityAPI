const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Community name is required"],
        unique: true
    },
    slug: {
        type: String,
        unique: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
});

