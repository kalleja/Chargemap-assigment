'use strict';
const connectionModel = require('../models/connection');

const connection_list_get = async (req, res) => {
  try {
    const connections = await connectionModel.find().populate('ConnectionTypeID');
    res.json(connections);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const connection_get = async (req, res) => {
  try {
    const connections = await connectionModel.findById(req.params.id);
    res.json(connections);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const connection_post = (req, res) => {
  res.send('In this forsaken endpoint you can add connection');
};

module.exports = {
  connection_list_get,
  connection_get,
  connection_post,

};

