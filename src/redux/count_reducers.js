
/**
 * 
 * @param {状态值} preState 
 * @param {函数或者对象} action 
 * @returns 
 */
const state = 1

export default function countReducer(preState=state,action){
    const {type,data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}