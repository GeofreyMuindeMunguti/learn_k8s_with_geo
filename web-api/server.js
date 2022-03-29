'use strict';


const express = require('express');
const {getHellowMessage} = require("./controllers/greeting.controller")


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


exports.greet = (req, res) => {
  res.send(getHellowMessage());
}

// App
const app = express();
app.get('/', this.greet);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);