import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Basic from './components/modules/01_basic';
import Props from './components/modules/02_props';
import State from './components/modules/03_state';
import Mapping from './components/modules/04_component_mapping';
import HotLoader from './components/modules/05_hot_loader';

ReactDOM.render(<Router history = {browserHistory}>
  <Route path = "/" component = {App}>
    <IndexRoute component = {Basic} />
    <Route path = "basic" component = {Basic} />
    <Route path = "props" component = {Props} />
    <Route path = "state" component = {State} />
    <Route path = "mapping" component = {Mapping} />
    <Route path = "hot_loader" component = {HotLoader} />
  </Route>
</Router>, document.getElementById('root'));
// ReactDOM.render(<OtherApp/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     const NextApp = require('./components/App').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextApp/>
//       </AppContainer>
//       ,
//       document.getElementById('root')
//     );
//   });
// }
