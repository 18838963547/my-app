
import {OPERCTION} from '../const'
const {ADD_PERSON,DEL_PERSON} = OPERCTION

// 接收两个参数 ----用来初始化状态和处理数据的
export default function personReducers(preState=[],action){
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        case DEL_PERSON:
            // const idx = preState.indexOf(data)
            // preState.splice(idx,1) 
            // return preState   这样做其实不会更新，使用unshift和push的时候。reducers就不是个纯函数了。
            return preState
        default:
            return preState
    }
}

/**
 * 纯函数
 * 一个函数的返回结果只依赖其参数，并且执行过程中没有副作用
 * 还要遵守一些约束
 */