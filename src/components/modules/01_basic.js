import React from 'react'

/* Basic */
class Basic extends React.Component {
  render(){
    let text = 'Hello React World';
    let style = {
      color: 'aqua',
      backgroundColor: 'black' // Camel Case 사용해야 함.
    };
    return (
      <div style={style}>
        {/* 주석은 root element 안에 있어야 함. */}
        {text}
      </div>
    );
  }
}
// 컴포넌트에서 다른 컴포넌트를 사용 가능
class OtherBasic extends React.Component {
  render() {
    return (
      <Basic/>
    );
  }
}

export default OtherBasic;
