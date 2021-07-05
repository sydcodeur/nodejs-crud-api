require('dotenv').config();

const config = {
    mongodb: {
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/player-db'
    },
    server: {
        port: process.env.PORT || 3000
    }
};

module.exports = config;