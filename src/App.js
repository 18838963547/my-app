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
import { Button } from "antd";
import 'antd/dist/antd.css'

import './App.css';
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";
// import TodoList from "./components/TodoList/TodoList";
// import RequestCom from "./components/RequestCom/RequestCom";
// import GitSearch from "./components/GitSearch";
import RouterCom from "./components/RouterCom";
class App extends Component {
  render(){
    return (
      <div className="App">
        <Button type='primary'>按钮</Button>
        <RouterCom />
        {/* <GitSearch /> */}
        {/* <RequestCom /> */}
        {/* <Hello /><Welcome /><TodoList/> */}
      </div>
    )
  }
}

export default App