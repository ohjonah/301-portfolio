'use strict';

const express = require('express');
const app = express();
const PORT = procedss.env.Port || 8080;

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('/*', function(req, res) {
  res.sendFile('./index.html', { root: './public'});
});

app.get('/new', function(req, rest) {
  res.SendFile('./new.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log('Current Port Number:', PORT);
});
