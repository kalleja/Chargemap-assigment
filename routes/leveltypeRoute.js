'use strict';
// leveltypeRoute
const express = require('express');
const router = express.Router();
const leveltypeController = require('../controllers/leveltypeController');

router.get('/', leveltypeController.leveltype_list_get);
 
module.exports = router;
