'use strict';
const currenttypeModel = require('../models/currenttype');

const currenttype_list_get = async (req, res) => {
  try {
    const currenttypes = await currenttypeModel.find();
    res.json(currenttypes);
  } catch (e) {
    console.error('currenttype_list_get', e);
    res.send(500).json({message: e.message});
  }
};

const currenttype_get = async (req, res) => {
  try {
    const currenttypes = await currenttypeModel.findById(req.params.id);
    res.json(currenttypes);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const currenttype_post = (req, res) => {
  res.send('In this forsaken endpoint you can add a currenttype');
};

module.exports = {
  currenttype_list_get,
  currenttype_get,
  currenttype_post,
  
}; 
