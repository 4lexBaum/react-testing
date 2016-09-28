"use strict";

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  setInterval(function(){
    var random = Math.round(Math.random()*100);
    socket.broadcast.emit("test", random);
  }, 1000);
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});