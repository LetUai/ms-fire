const mongoose = require('../services/database.js');
const Schema = mongoose.Schema;

const commerce = new Schema({

    user: { type: String },
    description: { type: String, max: 280 },
    commerceName: { type: String, max: 50 },
    phone: { type: String, max: 20 },
});

const commerceModel = mongoose.model('Commerce', commerce);

module.exports = commerceModel;


