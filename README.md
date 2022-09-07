## React

1. 子组件传递给父组件数据
    1. 父中定义一个函数传递给子组件
    2. 子组件通过props调用父组件中的函数。调用函数时把子组件的数据传入，父组件中即可拿到子组件的值

#### React ajax
1. 引入第三方库axios （使用这个）
    > 实质也是对HttpXMLRequest对象的封装
2. 自己封装
3. 使用jQuery

#### react 设置代理
1. 直接在src下创建setupProxy.js文件，然后使用中间件来做代理