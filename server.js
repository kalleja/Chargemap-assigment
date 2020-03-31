'use strict';


require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const cors = require("cors");
require('./models/connection');
require('./models/connectionType');
require('./models/level');
require('./models/station');
require('./models/currentType');

const stationRoute = require('./routes/stationRoute');
const connectionRoute = require('./routes/connectionRoute');
const authrosationRoute = require('./routes/authenticationRoute')

app.use(cors());

app.use("/station", stationRoute);

app.use("/connection", connectionRoute);

app.use("/auth", authrosationRoute);


const port = 3025; 
db.on('connected', () => { 
  app.listen(port, () => console.log(`App can be run from port ${port}!`));
});  



    
  