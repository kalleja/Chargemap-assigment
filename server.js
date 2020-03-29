'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const stationRoute = require('./routes/StationRoute');
const port = 3025; 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/station', stationRoute);

db.on('connected', () => { 
  app.listen(port, () => console.log(`App can be run from port ${port}!`));
});  
