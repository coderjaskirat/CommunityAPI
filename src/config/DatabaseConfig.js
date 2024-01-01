require('dotenv').config()

// DBName = 'projectapi';

URI = `mongodb+srv://jksingh:${process.env.DBUserPassword}@communityapi.dtzxlyb.mongodb.net/CommunityAPI?retryWrites=true&w=majority`;

module.exports = URI;
