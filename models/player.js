const mongoose = require('mongoose');
const playerSchema = mongoose.Schema(
    {
        name: { type: String },
        age: { type: Number },
        bio: { type: String },
        photoUrl: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Player', playerSchema);