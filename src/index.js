import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App';
import Basic from './components/modules/01_basic';
import Props from './components/modules/02_props';
import State from './components/modules/03_state';
import Mapping from './components/modules/04_component_mapping';

ReactDOM.render(<Router history = {browserHistory}>
  <Route path = "/" component = {App}>
    <IndexRoute component = {Basic} />
    <Route path = "basic" component = {Basic} />
    <Route path = "props" component = {Props} />
    <Route path = "state" component = {State} />
    <Route path = "mapping" component = {Mapping} />
  </Route>
</Router>, document.getElementById('root'));
// ReactDOM.render(<OtherApp/>, document.getElementById('root'));
