"use strict";

import c3 from 'c3';

<<<<<<< HEAD
var chart, data;
=======
var data;
>>>>>>> alex
//var bindTo = "#"+this.props.bindTo;

module.exports = {
    createChart: function (analysisName, socketName, bindTo) {
<<<<<<< HEAD
        chart = c3.generate({
=======
        var chart = c3.generate({
>>>>>>> alex
            bindto: bindTo,
            data: {
                x: 'x',
                columns: [
                    ['x', '4714', '4715', '4716', '4717', '4718', '4719', '4720'],
                    [analysisName, 10, 8, 11, 9, 6, 7, 15]
                ],
                type: 'bar'
            },
<<<<<<< HEAD
            //axis: {
            //    x: {
            //        type: 'category'
            //    }
            //}
=======
            axis: {
                x: {
                    type: 'category'
                }
            }
>>>>>>> alex
        });
        socket.on(socketName, function (msg) {
          var xAxis = ['x'];
          var yAxis = [analysisName];

          for (var key in msg) {
            if (msg.hasOwnProperty(key)) {
              xAxis.push(key);
              yAxis.push(msg[key]);
            }
          }
            chart.load({
                columns: [
                  xAxis,
                  yAxis
                ]
            });
        });

    }
}
