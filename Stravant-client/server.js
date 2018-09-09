var express = require('express');

console.log('port is running');
var app = express();
var server = app.listen(3001);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log(socket);
}
