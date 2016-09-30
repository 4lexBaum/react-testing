"use strict";

import c3 from 'c3';

var chart, data;

module.exports = {
    createChart: function () {
        chart = c3.generate({
            bindto: '#gauge-chart',
            data: {
                columns: [
                    ['data1', 50]
                ],
                type: 'gauge'
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
                    unit: '°C', // percentage is default
                    values: [30, 60, 90, 100]
                }
            }
        });
        socket.on('gauge', function (msg) {
            chart.load({
                columns: [
                    ['data1', msg]
                ]
            });
        });

    }
}
