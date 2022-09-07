import axios from 'axios';
import React, { Component } from 'react'

export default class RequestCom extends Component {
  getData=()=>{
    console.log('发送请求');
    axios.get('http://localhost:3000/api/cars').then(res=>{
        console.log(res.data)
    })
  }
  render() {
    return (
      <div>
        <div>请求测试</div>
        <button onClick={this.getData}>请求车辆数据</button>
      </div>
    )
  }
}
