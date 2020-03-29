'use strict';
// connectiontypeRoute
const express = require('express');
const router = express.Router();
const connectiontypeController = require('../controllers/connectiontypeController');

router.get('/', connectiontypeController.connectiontype_list_get);

module.exports = router;
