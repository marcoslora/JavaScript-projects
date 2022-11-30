'use strict';
//00-Alterna-projects/03-internet/Api-Rest
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hellos World');
});
app.listen(5000);
