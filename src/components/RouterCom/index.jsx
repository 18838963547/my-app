import React, { Component, lazy,Suspense } from 'react'
import { Route,Switch,Redirect} from 'react-router-dom'
// -------------------------------------------------------------
import MyNavLink from './MyNavLink'
// 这里的路由组件应放到pages中，这里为了学习测试，分模块。先放到这里

// import About from './About'
// import Home from './Home'
const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))

export default class RouterCom extends Component {
  render() {
    return (
      <div>
        {/* <MyNavLink to='/about?name=张三&age=18'>About</MyNavLink> */}
        {/* <MyNavLink to='/about/zhangsan/18'>About</MyNavLink> */}
        {/* <MyNavLink to={{pathname:'/about',state:{name:'zhangsan',age:18}}}>About</MyNavLink> */}

        <MyNavLink to='/about/zhangsan/18'>About</MyNavLink>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <MyNavLink to='/home'>Home</MyNavLink>

        {/* 这里的loading可以是一个组件，但是是组件的时候，不会懒加载 */}
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            {/* 注册路由 
              exact={true/false}  开启/关闭严格匹配。一般不开启
            */}
              {/* <Route path='/about' component={About}></Route> */}
              {/* <Route path='/about/:name/:age' component={About}></Route> */}
              {/* <Route path='/about' component={About}></Route> */}
              
                <Route path='/about' component={About}></Route>
                <Route path='/home' component={Home}></Route>
                <Redirect to='/about'></Redirect>
          </Switch>
        </Suspense>

      </div>
    )
  }
}