'use strict';
const leveltypeModel = require('../models/leveltype');

const leveltype_list_get = async (req, res) => {
  try {
    const leveltypes = await leveltypeModel.find();
    res.json(leveltypes);
  } catch (e) {
    console.error('leveltype_list_get', e);
    res.send(500).json({message: e.message});
  }
};

const leveltype_get = async (req, res) => {
  try {
    const leveltypes = await leveltypeModel.find().populate('CurrentTypeID');
    res.json(leveltypes);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const leveltype_post = (req, res) => {
  res.send('In this forsaken endpoint you can add a leveltype');
};

module.exports = {
  leveltype_list_get,
  leveltype_get,
  leveltype_post,
  
}; 
