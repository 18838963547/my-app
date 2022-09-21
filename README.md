## React 

### 一 特点
1. 采用 **组件化模式**、**声明式编码**，提高开发效率及组件复用率
2. 在React Native中可以使用React语法进行**移动端开发**
3. 使用**虚拟DOM+优秀的Diffing算法**，尽量减少与真实DOM的交互。

### 二 知识点 API
1. React.createElement  创建虚拟dom. 当直接写的是jsx语法的时候，直接使用ReactDOM.createRoot(id).render(vdom)
2. 虚拟DOM本质就是一个object类型的对象（JS中万物皆对象）。虚拟dom相对于真实的dom，对象上的属性少了很多属性，无需真实dom上那么多需要的属性

    >xml早期用于存储数和传输数据〈student〉19岁〈/student〉
    >后面慢慢的改为用json传输了，方便快捷


### 三 知识点，jsx语法
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

### 四 组件的实例对象核心属性
* 之一 ———— state状态
* 之一 ———— props
* 之一 ———— refs
* 以上三个属性见html文件

### 五 React的diffing算法
1. 最小比较节点是标签

#### 六 key的作用
1. （简单表达）key是虚拟dom的标识，在更新显示时，使用key作为对比，有着极其重要的作用
2. （详细表达）当状态中的数据发生变化的时候，react/vue会生成新的虚拟dom
    1. 如果节点相同，并且key相同，则直接使用之前的dom
    2. 如果节点相同，key比较不同，则使用新的虚拟dom，替换掉页面中之前的dom.
    3. 如果找不到，就直接生成新的dom，然后添加上
3. 用index作为key可能引发的问题
    1. 在使用遍历数组，进行逆序添加或者逆序删除的时候，会产生没必要的真实dom更新，造成效率低下
    2. 如果结构中包含有输入类的dom，会产生错误的dom更新--》界面有问题
    3. 如果不对数据进行逆序的添加或者删除，仅用于渲染列表之类的，是可以使用index的


### 七 数据传递
1. 子组件传递给父组件数据
    1. 父中定义一个函数传递给子组件
    2. 子组件通过props调用父组件中的函数。调用函数时把子组件的数据传入，父组件中即可拿到子组件的值
2. 任意组件传递数据，发布订阅模式
    1. 使用pubsub-js插件库来完成任意组件之间的消息传递

### 八 React ajax
1. 引入第三方库axios （使用这个）
    > 实质也是对HttpXMLRequest对象的封装
2. 自己封装
3. 使用jQuery
4. fetch （用的也不多，更多的是用被封装后的）
    1. 和xhr是并列的，也是内置在window上的对象，可以直接使用。
    2. 风格也是promise风格，可以解决回调地狱的问题
    3. 低版本浏览器可能不太支持，兼容性不太好

### 九 react 设置代理
1. 直接在src下创建setupProxy.js文件，然后使用中间件**http-proxy-middleware**来做代理

### 十 react路由 (react-router-dom)
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


### redux  一个管理状态库的插件
1. 可以应用于很多框架

### react-redux
1. 所有的UI组件都应该包裹一个容器组件，UI组件作为子组件
2. 容器组件时真正的和redux打交道的，里面可以随意的使用redux的api
3. Ui组件中不能使用任何redux的api
4. 容器组件会传给UI组件： 1. redux中保存的状态。2.用于操作状态的方法
5. 备注：容器给UI传递：状态、操作的方法，均通过props传递

#### 基本使用方式
1. 容器是用connect来链接容器和UI组件   connect(mapStateToProps,mapDispatchToProps)(UIComponent)

### react扩展
1. setState的使用 （两种写法）
    1. setState(stateChange[,callback]) 这里面传入一个object（stateChange）就是传入状态改变的对象,callback就是回调的函数
        > react的状态的更新是异步的。callback是在状态和页面都更新后才执行的。感觉类似于vue的nextTick()
    2. serState(updater[,callback])  updater是个函数（state,props）=>{}。
    * 总结
        * 对象式的写法是函数式写法的语法糖
        * 如果新状态依赖于原状态，可以使用函数式的
        * 如果新状态不依赖于原状态，可以使用对象式

2. LazyLoad路由的懒加载
    1. lazy
    2. suspense

3. Hooks（新语法） 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
    * 以前的版本中函数组件没有this，很多功能无法使用。新版本后加入Hooks来解决这个问题
    1. state Hooks
        ```
        functiong Demo(){
            const [count,setCount] = React.useState(0)
            console.log(a,b)
            return (
                <p>{count}</p>
            )
        }
        ```
    2. useEffect(()=>{},watchVal)
        * 相当于Vue的watch。后面的值是要检测的值，如果不赋值，就相当于检测全部的值
        * 在卸载组件前也会执行，需要在调用的函数中执行一些收尾工作
        * 实际可以把userEfffect看为三个生命周期的合并
            1. componentDidMount()
            2. componentDidUpdate()
            3. componentWillUnmount()

    3. useRef Hook
        * Ref Hook可以在函数 组件中存储、查找组件内的标签或其他数据
        * 语法 const refCOntainer = useRef()
        * 作用：保存标签对象，功能与React.createRef()一样

4. Fragment
    ```
        <Fragment></Fragment> // 也只能添加一个key值
        <></>  // 直接写一个空标签，也可以直接被忽略。但是空标签不接收任何属性
    ```

5. Context (上下文)  一种组件间通信方式。
    * 适合祖组件和后代组件之间的通信
    * 使用方式
        1. 创建一个context容器对象 cosnt UserNameContext = React.createContext()
        2. 子组件用创建的值作为标签包裹起来，并加上Provider。 
            ```
                <UserNameContext.Provider value={'value'}>
                    <B />
                </UserNameContext.Provider>
            ```
        3. B组件下的子级组件如果要使用value，需要先接收一下。
            static contextName = UserNameContext
            然后直接使用this.context获取传递的值。（离谱，这里的值定义真是混乱）

        4. 函数式组件使用方式
            直接使用jsx语法来调用函数使用
            <UserNameContext.Consumer>
                {
                    value=>(
                        return ''
                    )
                }
            <UserNameContext.Consumer>

6. PureComponent
    1. 组件存在的问题 
        *  子组件没有用到父组件的属性的时候，也会调用自身的render
        * 只要执行了setState({})，即使不改变状态数据，组件也会重新render

        > 原因： shouldComponentUpdate()返回的始终式true

    2. 解决方法1
        shouldComponentUpdate(nextProps,nextState){
            // 两个参数都是表示接下来要变得数据。通过来判断true和false来判断
            // 
        }
    3. 解决方法2---常用
        使用PureComponent 作为阀门，来判断新旧的数据进行对比
        组件使用class定义的时候之际继承PureComponent

7. render Props
    > 像Vue的slot功能
    * A组件，B组件，C组件
        ```
            <A render={(name)=><B name={name}/>}>
            // 在B组件中接收
            this.props.render(name)
        ```

8. 错误边界处理 （找出错的组件的父组件处理）
    * 当子组件报错的时候，会触发getDerivedStateFromError(err)函数调用，并将错误传递为函数参数
        > 这个只适用于生产环境。不适用于开发环境
    * componentDispath（）{
        // 统计错误次数。，反馈给服务器
    }

    * 只能统计生命周期中产生的错误


### react-router-dom V6
> V6版本做了很多改动，相比之下，更像vue了。 提供了很多api，使用的时候调用api就可以
