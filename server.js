'use strict';

const express = require('express');
const app = express();
const PORT = process.env.Port || 8080;

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('./index.html');
});

app.get('/new', function(req, rest) {
  res.SendFile('./new.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log('Current Port Number:', PORT);
});
