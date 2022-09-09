/**
 * 这里是容器组件
 */

// 引入ui组件
import CountReduxUI from "../../components/CountReduxUI";
import { createIncrementAction } from "../../redux/actions/count_actions";

// 引入store ---这里不能直接引入，要用props传递
// import store from "../../redux/store";

// 引入connect，用于链接UI组件与redux
import { connect } from "react-redux";

const mapStateToProps = (state)=> ({state:state})

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         b:(data)=>dispatch(createIncrementAction(data)), // 通知redux进行操作
//         c: (data)=> dispatch(createIncrementAction(data))
//     }
// }
// 容器和ui组件建立联系
// 第一次调用中可以传递两个参数，参数必须是函数.a传递状态，b传递行为
/**
 * mapDispatchToProps简写版本   react-redux自动调用了dispatch进行了数据的分发
 * {
 *      b:createIncrementAction,
 *      c:createIncrementAction
 * }
 *  */ 
const mapDispatchToProps = {
    b:createIncrementAction,
    c:createIncrementAction
}

const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountReduxUI)



export default CountContainer
