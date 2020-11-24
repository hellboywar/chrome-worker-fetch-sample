const port = 3000;
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.get('*', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, 'index.html'));
});

app.post('/cookie', (req, res) => {
  res.header('access-control-allow-credentials', 'true');
  res.header('access-control-allow-headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, Content-Length, Content-Disposition');
  res.header('access-control-allow-methods', 'GET, POST, OPTIONS');
  res.header('access-control-allow-origin', '*');
  res.header('set-cookie', 'secret_key=some_value; Expires=Tue, 08 Dec 2021 11:24:48 GMT; Domain=localhost; HttpOnly; SameSite');
  res.send({ result: 'ok' });
});

http
  .createServer(app)
  .listen(port, (error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    } else {
      console.log('Listening on port: ' + port + '.');
    }
  });
