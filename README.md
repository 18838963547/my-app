## React 

### 特点
1. 采用 **组件化模式**、**声明式编码**，提高开发效率及组件复用率
2. 在React Native中可以使用React语法进行**移动端开发**
3. 使用**虚拟DOM+优秀的Diffing算法**，尽量减少与真实DOM的交互。

### 知识点 API
1. React.createElement  创建虚拟dom. 当直接写的是jsx语法的时候，直接使用ReactDOM.createRoot(id).render(vdom)
2. 虚拟DOM本质就是一个object类型的对象（JS中万物皆对象）。虚拟dom相对于真实的dom，对象上的属性少了很多属性，无需真实dom上那么多需要的属性
```
xml早期用于存储数和传输数据〈student〉19岁〈/student〉
后面慢慢的改为用json传输了，方便快捷

```

### 知识点，jsx语法
1. 定义VDOM的时候，不要用引号
2. 标签中混入js表达式时要用{}。
    * 表达式和js的语句不是一个东西
    * 【表达式】一个表达式可以产生一个值，可以放在任何需要的地方
    * 【js语句】语句就是就是js代码不产生返回值的代码
3. 样式的类名指定不要用class，使用className
4. 内联样式，要用style={{key:value}}
5. 只有一个根标签
6. 标签必须闭合
7. 必须是html中已存在的标签，不可乱写标签。

### 组件的实例对象核心属性之一 ———— state状态
### 组件的实例对象核心属性之一 ———— props
### 组件的实例对象核心属性之一 ———— refs
以上三个属性见html文件

### React的doffing算法
1. 最小比较节点是标签

#### key的作用
1. （简单表达）key是虚拟dom的标识，在更新显示时，使用key作为对比，有着极其重要的作用
2. （详细表达）当状态中的数据发生变化的时候，react/vue会生成新的虚拟dom
    1. 如果节点相同，并且key相同，则直接使用之前的dom
    2. 如果节点相同，key比较不同，则使用新的虚拟dom，替换掉页面中之前的dom.
    3. 如果找不到，就直接生成新的dom，然后添加上
3. 用index作为key可能引发的问题
    1. 在使用遍历数组，进行逆序添加或者逆序删除的时候，会产生没必要的真实dom更新，造成效率低下
    2. 如果结构中包含有输入类的dom，会产生错误的dom更新--》界面有问题
    3. 如果不对数据进行逆序的添加或者删除，仅用于渲染列表之类的，是可以使用index的

    
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
