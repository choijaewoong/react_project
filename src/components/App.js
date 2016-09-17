import React from 'react'; // require('react')

class App extends React.Component {
  render(){
    let text = 'Hello React World';
    let style = {
      color: 'aqua',
      backgroundColor: 'black' // Camel Case 사용해야 함.
    };
    return (
      <div style={style}>{text}</div>
    );
  }
}

// 컴포넌트에서 다른 컴포넌트를 사용 가능
class OtherApp extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

export default OtherApp; // module.export = App
