import React from 'react'; // require('react')
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

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

/* Props & State */
class Props extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
class PropsState extends React.Component {
  render() {
    return (
      <div>
        <Props name="React">&#39;this.props.children&#39;는 Element안의 내용을 가지게 됩니다.</Props>
        {/* Router를 쓸경우 default 값을 설정 하지 않는 이상
            이런 식의 문법을 쓸 수 없어 보임 */}
        <Props name={this.props.name}>{this.props.value}</Props>
      </div>
    );
  }
}
// PropsState의 기본값 설정
PropsState.defaultProps = {
  name: "Props World",
  value: "기본 값을 설정 할 수 있습니다."
}

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

export {App, OtherBasic, PropsState}
