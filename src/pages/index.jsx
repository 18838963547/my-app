import React, { Component } from 'react'
import store from '../redux/store'

export default class index extends Component {
  render() {
    console.log(store.getStore());
    return (
      <div>
        <h5>title</h5>
        <div>s</div>
      </div>
    )
  }
}
