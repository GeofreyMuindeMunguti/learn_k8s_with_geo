'use strict';


const express = require('express');
require('dotenv').config();
const {getHellowMessage} = require("./controllers/greeting.controller")


// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';


exports.greet = (req, res) => {
  res.send(getHellowMessage());
}

// App
const app = express();
app.get('/', this.greet);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);