import React from 'react'; // require('react')
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li><Link to="basic">01_Basic</Link></li>
          <li><Link to="props">02_props</Link></li>
          <li><Link to="state">03_state</Link></li>
          <li><Link to="mapping">04_component_mapping</Link></li>
          <li><Link to="hot_loader">05_hot_loader</Link></li>
        </ol>
        {this.props.children}
      </div>
    );
  }
}

export default App;
