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

module.exports = {
  connection_list_get,
};

