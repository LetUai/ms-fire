const mongoose = require('../services/database.js');
const Schema = mongoose.Schema;

const commerce = new Schema({

    user: { type: String },
    description: { type: String, max: 280 },
    commerceName: { type: String, max: 50 },
    tags: { type: [String], max: 30 },
    phone: { type: String, max: 20 },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

const commerceModel = mongoose.model('Commerce', commerce);

module.exports = commerceModel;


