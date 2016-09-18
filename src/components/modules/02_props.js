import React from 'react';

/* Props & State */
class Props extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name}</h1>
        <p>{this.props.children}</p>
        <p>{this.props.number}</p>
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
        <Props name={this.props.name} number={this.props.number}>{this.props.value}</Props>
      </div>
    );
  }
}
// PropsState의 기본값 설정
PropsState.defaultProps = {
  name: "Props World",
  number: 5,
  value: "기본 값을 설정 할 수 있습니다."
}
// PropsState props의 타입 설정
PropsState.propTypes = {
  name : React.PropTypes.string,
  number: React.PropTypes.number.isRequired
}

export default PropsState;
