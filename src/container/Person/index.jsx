import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPersonUserName,delPersonUserName } from '../../redux/actions/person'

class Person extends Component {
  addNumber=()=>{
    const userName = this.userNameNode.value
    this.props.addUserName(userName)
  }
  render() {
    return (
      <div>
        <p>Person</p>
        <input type="text"  ref={c=> this.userNameNode = c}/>
        <button onClick={this.addNumber}>添加</button>
        <p>{this.props.state.person}</p>
      </div>
    )
  }
}

// 主容器
const mapStateToProps = state => ({state:state}) // 这里的state是获取了整个redux中的数据仓库。当前组件需要哪些，取哪些即可
const mapDispatchToProps = {
    addUserName:addPersonUserName,
    delUserName:delPersonUserName
}

export default connect(mapStateToProps,mapDispatchToProps)(Person)