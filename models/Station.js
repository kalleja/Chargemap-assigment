// https://docs.mongodb.com/manual/core/2dsphere/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Schema = mongoose.Schema;

const stationSchema = new Schema({

})
const stationSchema = new Schema({
  Title: String, 
  AddressLinel: String,
  Town: String,
  StateOrProvince: String, 
  Postcode: String,
  Locations: {
    type: {
      type: String, 
      enum: ['Point'],
      required: true
    }
  }
});

module.exports = mongoose.model('Station', stationSchema);
