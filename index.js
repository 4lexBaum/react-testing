import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { App } from './src/App';
import { TestModul } from './src/TestModul';

var testChart = require('./src/testChart.js');
var gaugeChart = require('./src/gaugeChart.js');
var barChart = require('./src/barChart.js');
var pieChart = require('./src/pieChart.js');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/test" component={TestModul}/>
  </Router>
), document.getElementById('main'));
