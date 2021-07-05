const express = require('express');
const { body } = require('express-validator');

const playerController = require('../controllers/player');
const uploadImage = require('../middleware/upload-image');

const router = express.Router();

router.get('/players', playerController.getAllPlayers);

router.get('/player/:playerId', playerController.getSinglePlayer);

router.delete('/player/:playerId', playerController.deletePlayer);

router.post('/player', uploadImage,
    [
        body('name')
            .notEmpty()
            .withMessage('Please enter player name!'),
        body('age')
            .notEmpty()
            .withMessage("Please enter the player's age")
            .isInt()
            .withMessage("Age must be an integer"),
        body('bio')
            .trim()
            .notEmpty()
            .withMessage("Please enter the player's biography")
            .isLength({ min: 15 })
            .withMessage('The biography must be at least 15 characters'),
    ],
    playerController.addPlayer
);

router.put('/player/:playerId', uploadImage,
    [
        body('name')
            .notEmpty()
            .withMessage('Please enter player name!'),
        body('age')
            .notEmpty()
            .withMessage("Please enter the player's age")
            .isInt()
            .withMessage("Age must be an integer"),
        body('bio')
            .trim()
            .notEmpty()
            .withMessage("Please enter the player's biography")
            .isLength({ min: 15 })
            .withMessage('The biography must be at least 15 characters'),
    ],
    playerController.updatePlayer);

module.exports = router;