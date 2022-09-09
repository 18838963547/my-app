// 该文件专门为count组件生成action对象

import { OPERCTION } from "../const"
// import store from "./store"
const {INCREMENT,DECREMENT} = OPERCTION

export function createIncrementAction(data){
    return {type:INCREMENT,data} 
}

export function createDecrementAction(data){
    return {type:DECREMENT,data}
}

// 异步action，就是指action的值为函数
export const createIncrementAsyncAction = (data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            // store.dispatch(createIncrementAction(data))
            dispatch(createIncrementAction(data))
        },time)
    }
}