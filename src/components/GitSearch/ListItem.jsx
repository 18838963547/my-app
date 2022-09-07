import React, { Component } from 'react'

export default class ListItem extends Component {
  send= ()=>{
    const {keyWordNode:{value:keyword}} = this
    fetch(`/api/search/users?q=${keyword}`).then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div>ListItem11
        <input type="text" ref={c => this.keyWordNode = c} />
        <button onClick={this.send}>发送</button>
      </div>
    )
  }
}