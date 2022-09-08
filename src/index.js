import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>
)

// 检测redux中的状态改变。如果改变，重新更新渲染  （当使用了react-redux后，就不需要这里的代码监测了。）
// store.subscribe(()=>{
//     root.render(<BrowserRouter><App /></BrowserRouter> )
// })