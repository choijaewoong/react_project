import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {App, OtherBasic, PropsState} from './components/App';

ReactDOM.render(<Router history = {browserHistory}>
  <Route path = "/" component = {App}>
    <IndexRoute component = {OtherBasic} />
    <Route path = "basic" component = {OtherBasic} />
    <Route path = "props_state" component = {PropsState} />
  </Route>
</Router>, document.getElementById('root'));
// ReactDOM.render(<OtherApp/>, document.getElementById('root'));
