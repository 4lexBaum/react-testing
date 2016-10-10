import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Dashboard } from './src/Modules/Dashboard';
import { TestModule } from './src/Modules/TestModule';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard}/>
    <Route path="/test" component={TestModule}/>
  </Router>
), document.getElementById('main'));
