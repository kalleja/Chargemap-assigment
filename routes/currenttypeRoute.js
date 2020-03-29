'use strict';
// currenttypeRoute
const express = require('express');
const router = express.Router();
const currenttypeController = require('../controllers/currenttypeController');

router.get('/', currenttypeController.currenttype_list_get);


module.exports = router;
