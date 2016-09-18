import React from 'react'

class State extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }

  // 버튼을 눌렀을때 호출되는 메소드
  handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    );
  }
}

export default State
