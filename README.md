## React 

### 数据传递
1. 子组件传递给父组件数据
    1. 父中定义一个函数传递给子组件
    2. 子组件通过props调用父组件中的函数。调用函数时把子组件的数据传入，父组件中即可拿到子组件的值
2. 任意组件传递数据，发布订阅模式
    1. 使用pubsub-js插件库来完成任意组件之间的消息传递

### React ajax
1. 引入第三方库axios （使用这个）
    > 实质也是对HttpXMLRequest对象的封装
2. 自己封装
3. 使用jQuery
4. fetch （用的也不多，更多的是用被封装后的）
    1. 和xhr是并列的，也是内置在window上的对象，可以直接使用。
    2. 风格也是promise风格，可以解决回调地狱的问题
    3. 低版本浏览器可能不太支持，兼容性不太好

### react 设置代理
1. 直接在src下创建setupProxy.js文件，然后使用中间件**http-proxy-middleware**来做代理

### react路由 (react-router-dom)
> 路由就是映射关系。地址映射的可以是function或者components

* 操作路由的方式 History上面有两种处理路由的方式
    1. history方式：History.createBrowserHistory() 直接使用H5推出的history上的API  
    2. hash: History.createHashHistory()  锚点
    * 区别
    > 1. 底层原理不一样： BrowserRouter使用的是H5中的history API ，不兼容ie9以下版本; HashRouter使用的是URL的哈希值
    > 2. url的表现形式不一样，hash的多了个#
    > 3. 刷新后对state参数的影响。BrowserRouter没用影响，因为state保存在history的对象中。HashRouter刷新后会导致state数据丢失
    > 4. hashRouter可以解决一些刷新后路径错误的问题


* 组件分类（路由组件和一般组件） 
    * 路由组件：主要路由组件一般放到pages中，相当于vue的views文件 会收到一些props:
        1. history
        2. location
        3. mathch
    * 一般组件，主要路由组件一般放到component中， props不会收到一些路由上的props

* 路由多级路径刷新样式表丢失问题
    1. 使用绝对路径，不要带./ 或者../
    2. 使用%PUBLIC_URl%
    3. 使用HashRouter

* 路由的模糊匹配

* 路由的三种传参方式
    ```
        {/* <MyNavLink to='/about?name=张三&age=18'>About</MyNavLink> */}
        {/* <MyNavLink to='/about/zhangsan/18'>About</MyNavLink> */}
        {/* <MyNavLink to={{pathname:'/about',state:{name:'zhangsan',age:18}}}>About</MyNavLink> */}

        {/* <Route path='/about' component={About}></Route> */}
        {/* <Route path='/about/:name/:age' component={About}></Route> */}
        {/* <Route path='/about' component={About}></Route> */}

        // console.log(this.props.history.location.search); // ？传参
        // console.log(this.props.match.params); // /传参
        // console.log(this.props.location.state); // 第三种传参
    ```

* 路由的操作栈方式。push和replace
* 编程式导航 
    * this.props.history.push(path) //一般组件的props没有history
    * 一般组件使用history。要引入withRouter。 withRouter(一般组件) 返回值是一个新的组件————就是给一般组件加上history
