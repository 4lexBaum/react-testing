// main.js
import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './src/App.js';

import c3 from 'c3';

var testChart = require('./src/testChart.js');
var gaugeChart = require('./src/gaugeChart.js');
var barChart = require('./src/barChart.js');
var pieChart = require('./src/pieChart.js');  

ReactDOM.render(
    <App /> ,
    document.getElementById('main')
);

testChart.createChart();
gaugeChart.createChart();
barChart.createChart();
pieChart.createChart();
