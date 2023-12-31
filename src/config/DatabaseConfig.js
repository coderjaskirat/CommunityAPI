require('dotenv').config()

// DBName = 'projectapi';

URI = `mongodb+srv://jksingh:${process.env.DBUserPassword}@projectapi.qzytlb5.mongodb.net/projectAPI?retryWrites=true&w=majority`;

module.exports = URI;
