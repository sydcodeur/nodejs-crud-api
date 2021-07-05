const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


const playerRoutes = require('./routes/player');
const config = require('./config/config');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api/v1/', playerRoutes);


mongoose.connect(config.mongodb.url)
    .then(() => {
        console.log('You are connected to player-db!')
        app.listen(config.server.port, () => {
            console.log(`Server is running on port ${config.server.port}`);
        });
    })
    .catch((error) => {
        console.log('Connection to player-db failed', error)
    });

