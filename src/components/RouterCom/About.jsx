import React, { Component } from 'react'

export default class About extends Component {
  componentDidMount(){
    console.log('路由传参三种方式');
    // console.log(this.props.history.location.search); // ？传参
    // console.log(this.props.match.params); // /传参
    // console.log(this.props.location.state); // 第三种传参
  }
  render() {
    return (
      <div>About内容</div>
    )
  }
}
