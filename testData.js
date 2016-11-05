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
    setInterval(function () {
        var randomBar = Math.floor(Math.random() * 30) + 70;
        socket.emit("bar", randomBar);
    }, 1000);
    setInterval(function () {
        var randomDrill = Math.floor(Math.random() * 250) + 100;
        socket.emit("drill", randomDrill);
    }, 3000);
    setInterval(function () {
        var randomMill = Math.floor(Math.random() * 250) + 100;
        socket.emit("mill", randomMill);
    }, 3000);
    setInterval(function () {
        var w1 = Math.floor(Math.random() * 100);
        var w2 = Math.floor(Math.random() * 100);
        var w3 = Math.floor(Math.random() * 100);
        var w4 = Math.floor(Math.random() * 100);
        socket.emit("pie", {
            'w1': w1,
            'w2': w2,
            'w3': w3,
            'w4': w4
        });
    }, 3000);

    function send() {
        var random = Math.floor(Math.random() * 250) + 100;
        socket.emit("line", random);
        socket.emit("gauge", random);
        var timeout = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(function () {
            send();
        }, timeout)
    }
    send();

    var arrayInd = 0;
    setInterval(function(){
      socket.emit("machine", exampleData[arrayInd]);
      arrayInd++;
      if(arrayInd == 31){
        arrayInd = 0;
      }
    }, 1000)
});

http.listen(3001, function () {
    console.log('listening on *:3001');
});

var exampleData = [{
    "value": false,
    "status": "GOOD",
    "itemName": "L1",
    "timestamp": 1478200539573
}, {
    "value": true,
    "status": "GOOD",
    "itemName": "L1",
    "timestamp": 1478200570673
}, {
    "value": false,
    "status": "GOOD",
    "itemName": "L2",
    "timestamp": 1478200640703
}, {
    "value": true,
    "status": "GOOD",
    "itemName": "L2",
    "timestamp": 1478200670813
}, {
    "value": false,
    "status": "GOOD",
    "itemName": "L3",
    "timestamp": 1478200740873
}, {
    "value": true,
    "status": "GOOD",
    "itemName": "MILLING",
    "timestamp": 1478200770933
}, {
    "value": 12480,
    "status": "GOOD",
    "itemName": "MILLING_SPEED",
    "timestamp": 1478200780983
}, {
    "value": 156.7,
    "status": "GOOD",
    "itemName": "MILLING_HEAT",
    "timestamp": 1478200831053
}, {
    "value": 180.20499999999998,
    "status": "GOOD",
    "itemName": "MILLING_HEAT",
    "timestamp": 1478200881113
}, {
    "value": 15000,
    "status": "GOOD",
    "itemName": "MILLING_SPEED",
    "timestamp": 1478200951183
}, {
    "value": 235.04999999999998,
    "status": "GOOD",
    "itemName": "MILLING_HEAT",
    "timestamp": 1478200961233
}, {
    "value": 219.37999999999997,
    "status": "GOOD",
    "itemName": "MILLING_HEAT",
    "timestamp": 1478201031293
}, {
    "value": 0,
    "status": "GOOD",
    "itemName": "MILLING_SPEED",
    "timestamp": 1478201091333
}, {
    "value": 130.98,
    "status": "GOOD",
    "itemName": "MILLING_HEAT",
    "timestamp": 1478201101383
}, {
    "value": 39.769999999999996,
    "status": "GOOD",
    "itemName": "MILLING_HEAT",
    "timestamp": 1478201131443
}, {
    "value": false,
    "status": "GOOD",
    "itemName": "MILLING",
    "timestamp": 1478201141493
}, {
    "value": true,
    "status": "GOOD",
    "itemName": "L3",
    "timestamp": 1478201181543
}, {
    "value": false,
    "status": "BAD",
    "itemName": "L4",
    "timestamp": 1478201231653
}, {
    "value": true,
    "status": "GOOD",
    "itemName": "DRILLING",
    "timestamp": 1478201271753
}, {
    "value": 15500,
    "status": "GOOD",
    "itemName": "DRILLING_SPEED",
    "timestamp": 1478201281773
}, {
    "value": 198.98,
    "status": "GOOD",
    "itemName": "DRILLING_HEAT",
    "timestamp": 1478201331843
}, {
    "value": 228.82699999999997,
    "status": "GOOD",
    "itemName": "DRILLING_HEAT",
    "timestamp": 1478201381903
}, {
    "value": 18500,
    "status": "GOOD",
    "itemName": "DRILLING_SPEED",
    "timestamp": 1478201451913
}, {
    "value": 298.46999999999997,
    "status": "GOOD",
    "itemName": "DRILLING_HEAT",
    "timestamp": 1478201461973
}, {
    "value": 278.57199999999995,
    "status": "GOOD",
    "itemName": "DRILLING_HEAT",
    "timestamp": 1478201532053
}, {
    "value": 0,
    "status": "GOOD",
    "itemName": "DRILLING_SPEED",
    "timestamp": 1478201582153
}, {
    "value": 120.0,
    "status": "GOOD",
    "itemName": "DRILLING_HEAT",
    "timestamp": 1478201592173
}, {
    "value": false,
    "status": "GOOD",
    "itemName": "DRILLING",
    "timestamp": 1478201602223
}, {
    "value": true,
    "status": "BAD",
    "itemName": "L4",
    "timestamp": 1478201632273
}, {
    "value": false,
    "status": "GOOD",
    "itemName": "L5",
    "timestamp": 1478201732403
},
{
    "value": true,
    "status": "GOOD",
    "itemName": "L5",
    "timestamp": 1478201732409
}]
