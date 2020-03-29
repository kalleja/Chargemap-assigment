'use strict';
const levelModel = require('../models/level'); 
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

const level_list_get = async (req, res) => {
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

    const levels = await levelModel.find(query, {'_id': 0, '__v': 0})
    .skip(startIndex)
    .limit(limit)
    .populate({
      path: 'LevelID',
         });
    res.json(levels);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const level_get = async (req, res) => {
  try {
    const levels = await levelModel.findById(req.params.id, {_id: 0, __v: 0}).populate({
      path: 'LevelID',
          });
    res.json(levels);
  } catch (e) {
    res.send(500).json({
      message: e.message
    });
  }
};

const level_post = (req, res) => {
  res.send('With this endpoint you can add levels');
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
  level_list_get,
  level_get,
  level_post,
};