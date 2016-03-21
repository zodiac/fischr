var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Global controller. Basically being used as middleware.
app.get('/*', function(req, res, next) {
    // General headers for security, ranging from clickjacking protection to
    // anti-crawler protection. Note that the XSS protection only applies to
    // IE8+ and Chrome, so still sanitize all input.
    res.header('X-Frame-Options', 'DENY');
    res.header('X-Robots-Tag', 'noindex');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');

    next();
});

app.use(express.static('public'));
app.use(express.static('source/views'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
