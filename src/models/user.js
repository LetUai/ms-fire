const mongoose = require('../services/database.js');
const Schema = mongoose.Schema;

const profile = new Schema({
    email: { type: String, unique: true, max: 100 },
    password: { type: String, max: 100 },
    name: { type: String, max: 100, unique: true },
    favorites: { type: [String] },
    entry: { type: Date, default: Date.now() }
});

const profileModel = mongoose.model('Profile', profile);

module.exports = profileModel; 
