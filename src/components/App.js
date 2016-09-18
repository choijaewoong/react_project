import React from 'react'; // require('react')
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li><Link to="basic">01_Basic</Link></li>
          <li><Link to="props_state">02_props_state</Link></li>
        </ol>
        {this.props.children}
      </div>
    );
  }
}

export default App
