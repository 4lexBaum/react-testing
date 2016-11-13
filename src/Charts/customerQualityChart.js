"use strict";

import c3 from 'c3';

var chart, data;

module.exports = {
    createChart: function () {
        //var cnt = 0;
        //var length = 0;
        chart = c3.generate({
            bindto: '#customer-quality-chart',
            data: {
                x: 'x',
                columns: [
                    ['x', '4714', '4715', '4716', '4717', '4718', '4719', '4720'],
                    ['ok', 10, 8, 11, 9, 6, 7, 15]
                    ['not-ok', 3, 5, 6, 1, 7, 6, 2]
                ],
                groups: [
                  ['ok', 'not-ok']
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    type: 'category'
                }
            }
        });
        socket.on('customer-quality', function (msg) {
            chart.load({
                columns: [
                    ['x', '4714', '4715', '4716', '4717', '4718', '4719', '4720'],
                    ['ok', msg.customer1_ok, msg.customer2_ok, msg.customer3_ok, msg.customer4_ok, msg.customer5_ok, msg.customer6_ok, msg.customer7_ok],
                    ['not-ok', msg.customer1_nok, msg.customer2_nok, msg.customer3_nok, msg.customer4_nok, msg.customer5_nok, msg.customer6_nok, msg.customer7_nok]
                ]
            });
        });

    }
}
