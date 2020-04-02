'use strict';
// stationRoute
const express = require('express');
const router = express.Router();
const stationController = require('../controllers/StationController');

router.get('/', stationController.station_list_get);

router.get("/:id", stationController.station_get);

router.post('/', stationController.station_post);

router.put('/',  (req, res) =>{
    res.send( "Whit this endpoint you put one more your own station");
} );

router.delete('/', (req, res) =>{
    res.send( "Whit this endpoint you delet your own station");
} );



module.exports = router;