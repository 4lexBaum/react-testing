"use strict";

import c3 from 'c3';

var chart, data;
var cnt = 1;
var length = 0;

module.exports = {
    createChart: function () {
        chart = c3.generate({
            bindto: '#test-chart',
            data: {
                x: 'x',
                columns: [
                    ['x', new Date()],
                    ['Temperatur Bohrer', 50]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    max: 100,
                    min: 0
                },
                x: {
                    type: 'timeseries',
                    tick: {
                        culling: {
                            max: 0
                        },
                        format: '%H:%M:%S'
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
        socket.emit('status', 'ready');
        socket.on('test', function (msg) {
            cnt++;
            if(cnt>15){
              length = 1;
            }

            chart.flow({
                columns: [
                    ['x', new Date()],
                    ['Temperatur Bohrer', msg]
                ],
                length: length,
                duration: 500
            });
        });

    }
}
