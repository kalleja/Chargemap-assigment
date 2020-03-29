// https://docs.mongodb.com/manual/core/2dsphere/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    ConnectionTypeID: Array,
    LevelID: Array,
    CurrentTypeID: Array,
    Quantity: Number, 
});

module.exports = mongoose.model('Connection', connectionSchema);