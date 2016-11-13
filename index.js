import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Dashboard } from './src/Modules/Dashboard';
import { TestModule } from './src/Modules/TestModule';
import { MachineOverview } from './src/Modules/MachineOverview';
import { Statistics } from './src/Modules/Statistics';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard}/>
    <Route path="/test" component={TestModule}/>
    <Route path="/machine" component={MachineOverview}/>
    <Route path="/statistics" component={Statistics}/>
  </Router>
), document.getElementById('main'));
