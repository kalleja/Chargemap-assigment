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



module.exports = {
  currenttype_list_get,
 
}; 
