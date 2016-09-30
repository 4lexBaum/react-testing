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
    setInterval(function(){
      var randomBar = Math.floor(Math.random()*30)+70;
      socket.emit("bar", randomBar);
    },1000);
    socket.on('status', function (msg) {
        if (msg === 'ready') {
            console.log("streaming started");
            var start, range;
            var cnt = 1;
            function send() {
              /*  if((cnt % 10) === 0){
                  start = 100;
                  range = 400;
                } else{
                  start = 200;
                  range = 50;
                }*/
                var random = Math.floor(Math.random() * 250) + 100;
                socket.emit("test", random);
                socket.emit("gauge", random);
                var timeout = Math.floor(Math.random() * 4000) + 1000;
                cnt++;
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
