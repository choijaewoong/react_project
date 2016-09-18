import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App';
import Basic from './components/modules/01_basic';
import PropsState from './components/modules/02_props_state';

ReactDOM.render(<Router history = {browserHistory}>
  <Route path = "/" component = {App}>
    <IndexRoute component = {Basic} />
    <Route path = "basic" component = {Basic} />
    <Route path = "props_state" component = {PropsState} />
  </Route>
</Router>, document.getElementById('root'));
// ReactDOM.render(<OtherApp/>, document.getElementById('root'));
