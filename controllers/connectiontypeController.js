'use strict';
const connectiontypeModel = require('../models/connectiontype');

const connectiontype_list_get = async (req, res) => {
  try {
    const connectiontypes = await connectiontypeModel.find();
    res.json(connectiontypes);
  } catch (e) {
    console.error('connectiontype_list_get', e);
    res.send(500).json({message: e.message});
  }
};

const connectiontype_get = async (req, res) => {
  try {
    const connectiontypes = await connectiontypeModel.find().populate('LevelID');
    res.json(connectiontypes);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const connectiontype_post = (req, res) => {
  res.send('In this forsaken endpoint you can add a connectiontype');
};

module.exports = {
  connectiontype_list_get,
  connectiontype_get,
  connectiontype_post,
  
}; 
