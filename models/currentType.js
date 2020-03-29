const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currentTypeSchema = new Schema({
    id:String,
    Description:String,
    Title:String,
    
  
});

module.exports = mongoose.model('CurrentTypeID', currentTypeSchema);