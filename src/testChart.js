"use strict";

import c3 from 'c3';

var chart, data;

module.exports = {
    createChart: function () {
        data = ['Temperatur Bohrer', 80, 92, 80, 44, 95, 89, 80, 92, 80, 44]
        chart = c3.generate({
            bindto: '#test-chart',
            data: {
                columns: [
                    data
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    max: 100,
                    min: 0
                },
                x: {
                  tick: {
                    culling: 0
                  }
                }
            },
            transition: {
              duration: 0
            },
            grid: {
              y: {
                show: true
            }
    }
        });
        socket.on('test', function (msg) {
            chart.flow({
                columns: [ ['Temperatur Bohrer', msg] ],
                duration: 500
            });
        });

    }
}
