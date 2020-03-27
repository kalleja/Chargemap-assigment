'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const stationRoute = require('./routes/StationRoute');
const port = 3000; 

app.use('/station', stationRoute);

db.on('connected', () => { 
  app.listen(port, () => console.log(`app listening on port ${port}!`));
});
