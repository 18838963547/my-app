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
import './App.css';
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";
// import TodoList from "./components/TodoList/TodoList";
// import RequestCom from "./components/RequestCom/RequestCom";
import GitSearch from "./components/GitSearch";
class App extends Component {
  render(){
    return (
      <div className="App">
        <GitSearch />
        {/* <RequestCom /> */}
        {/* <Hello />
        <Welcome />
        <TodoList/> */}
      </div>
    )
  }
}

export default App