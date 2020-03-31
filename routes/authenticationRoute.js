"use strict";
const express = require("express");
const router = express.Router();
const logginController = require("../controllers/LoginController");

router.post("/login", logginController.login);

module.exports = router;