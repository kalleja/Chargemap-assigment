'use strict';
const stationModel = require('../models/Station');

const station_list_get = async (req, res) => {
  try {
    const stations = await stationModel.find();
    res.json(stations);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
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
  res.send('With this endpoint you can add stations');
};

module.exports = {
  station_list_get,
  station_get,
  station_post,
};
