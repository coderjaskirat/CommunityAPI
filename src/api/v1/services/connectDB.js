const mongoose = require('mongoose');
const URI = require('../../../config/DatabaseConfig');

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected...');
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
};

module.exports = connectDB;
