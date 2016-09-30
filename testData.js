"use strict";

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('status', function (msg) {
        if (msg === 'ready') {
            console.log("streaming started");

            function send() {
                var random = Math.floor(Math.random() * 80) + 10;
                socket.emit("test", random);
                socket.emit("gauge", random);
                var timeout = Math.floor(Math.random() * 4000) + 1000;
                setTimeout(function () {
                    send();
                }, timeout)
            }
            send();


        }
    });
});

http.listen(3001, function () {
    console.log('listening on *:3001');
});
