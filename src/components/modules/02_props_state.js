import React from 'react'

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

export default PropsState
