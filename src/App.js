// import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         测试
// //       </header>
// //     </div>
// //   );
// // }

// export default App;

import React,{Component} from "react";
// import { Button } from "antd";
// import 'antd/dist/antd.css'
import store from "./redux/store";

import './App.css';
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";
// import TodoList from "./components/TodoList/TodoList";
// import RequestCom from "./components/RequestCom/RequestCom";
// import GitSearch from "./components/GitSearch";
// import RouterCom from "./components/RouterCom";
// import CountRedux from "./components/CountRedux";
import CountContainer from "./container/countContain";

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Button type='primary'>按钮</Button> */}
        {/* <RouterCom /> */}
        {/* <GitSearch /> */}
        {/* <RequestCom /> */}
        {/* <Hello /><Welcome /><TodoList/> */}
        {/* <CountRedux></CountRedux> */}
        {/* 给容器组件传递store */}
        {/* <CountContainer store={store}></CountContainer> */}
        {/* 这里可以全局给每个组件传入store,在index.js中使用Provider标签，给全局注入 */}
        <CountContainer></CountContainer>

      </div>
    )
  }
}

export default App