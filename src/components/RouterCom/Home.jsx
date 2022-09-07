import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Message from './component/Message'
import News from './component/News'

import MyNavLink from './MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>Home中的内容</div>
        <MyNavLink to='/home/news'>news</MyNavLink>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <MyNavLink to='/home/msg'>msg</MyNavLink>

        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/msg' component={Message}></Route>
          <Redirect to='/home/msg'></Redirect>
        </Switch>
      </div>
    )
  }
}
