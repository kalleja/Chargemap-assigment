'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const stationRoute = require('./routes/stationRoute');
const connectionRoute = require('./routes/connectionRoute');
const port = 3025; 

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

require('./models/connection');
require('./models/connectionType');
require('./models/level');
require('./models/Station');
require('./models/currentType');



app.use('/station', stationRoute);
app.use('/connection', connectionRoute);

db.on('connected', () => { 
  app.listen(port, () => console.log(`App can be run from port ${port}!`));
});  



    
  