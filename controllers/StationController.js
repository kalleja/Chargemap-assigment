'use strict';
const stationModel = require('../models/station'); 
/**
 * PolygonCorner enums
 * Define 4 points of a polygon
 */
let PolygonCorner = {
  BOTTOM_RIGHT: 'bottomRight',
  BOTTOM_LEFT: 'bottomLeft',
  TOP_RIGHT: 'topRight',
  TOP_LEFT: 'topLeft'
};

const station_list_get = async (req, res) => {
  try {
    let limit = getLimitFromQueryURL(req);
    let startIndex = getStartIndexFromQueryURL(req);
    let coordinates = getPolygonCoordinate(req);

    let query = {};
    if (coordinates.length > 0) {
      query.Location = { $geoWithin :
                          { $geometry :
                            { type : "Polygon" ,
                              coordinates : [coordinates]
                        } } };
    }

    const stations = await stationModel.find(query, {'_id': 0, '__v': 0})
    .skip(startIndex)
    .limit(limit)
    .populate({ path: 'Station'  });
    res.json(stations);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const station_get = async (req, res) => {
  try {
    const stations = await stationModel.findById(req.params.id, {_id: 0, __v: 0}).populate({
      path: 'Station' });
    res.json(stations);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const station_post = (req, res) => {
  res.send('With this forsaken endpoint you can add stations');
};

// Helpers function
const getLimitFromQueryURL = (req) => {
    let limit = req.query.limit;

    // Check if limit is provided in URL Params (Case where the entered value is NaN is not handled)
    if (limit === undefined) {
      limit = 10;
    } else {
      limit = parseInt(req.query.limit);
    }

    return limit;
};

const getStartIndexFromQueryURL = (req) => {
    let startIndex = req.query.start;

    // Check if startIndex is provided in URL Params (Case where the entered value is NaN is not handled)
    if  (startIndex === undefined) {
      startIndex = 0;
    } else {
      startIndex = parseInt(req.query.start);
    }

    return startIndex;
};

const getPolygonCoordinate = (req) => {
  let topLeft = req.query.topLeft;
  let topRight = req.query.topRight;
  let bottomLeft = req.query.bottomLeft;
  let bottomRight = req.query.bottomRight;

  let arrayOfCoordinates = [];
  // If any of the coordinates is not provided then we will return empty array of coordinates
  if (topLeft === undefined || topRight === undefined || bottomLeft === undefined || bottomRight === undefined) {
    return arrayOfCoordinates;
  }

  topLeft = JSON.parse(topLeft);
  topRight = JSON.parse(topRight);
  bottomLeft = JSON.parse(bottomLeft);
  bottomRight = JSON.parse(bottomRight);

  arrayOfCoordinates = [
    [topLeft.lng, topLeft.lat],
    [topRight.lng, topRight.lat],
    [bottomRight.lng, bottomRight.lat],
    [bottomLeft.lng, bottomLeft.lat]
  ];
  
  return arrayOfCoordinates;
};

module.exports = {
  station_list_get,
  station_get,
  station_post,
};















