var express = require('express');
var socket = require('socket.io');

const app = express();
const port = process.env.PORT || 5000;

var server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'your express is connected to react' });
});

var io = socket(server);

io.on('connection', socket => {
  socket.on('message', function(msg) {
    console.log('message:' + msg);
  });
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});
