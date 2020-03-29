'use strict';
const stationModel = require('../models/Station');

const station_list_get = async (req, res) => {
  try {
    const stations = await stationModel.find().populate('Connections');
    res.json(stations);
  } catch (e) {
    console.error('station_list_get', e);
    res.send(500).json({message: e.message});
  }
};

const station_get = async (req, res) => {
  try {
    const stations = await stationModel.findById(req.params.id);
    res.json(stations);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const station_post = (req, res) => {
  res.send('In this forsaken endpoint you can add a stations');
};

module.exports = {
  station_list_get,
  station_get,
  station_post,
  
}; 
