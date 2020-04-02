'use strict';
 
require('dotenv').config();
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const db = require('./database/db');
const cors = require("cors");
const stationRoute = require('./routes/StationRoute');
const connectionRoute = require('./routes/connectionRoute');
const authrosationRoute = require('./routes/authenticationRoute')
require('./models/connection');
require('./models/connectionType');
require('./models/level');
require('./models/station');
require('./models/currentType'); 



app.use(cors()); 

app.use("/station", stationRoute); 

app.use("/connection", connectionRoute); 

app.use("/auth", authrosationRoute);


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

const port = 3025;   
db.on('connected', () => { 
  app.listen(port, () => console.log(`App can be run from port ${port}!`));
});  
 


    
  