import { legacy_createStore as createStore,applyMiddleware } from "redux";
import countReducer from './count_reducers'
// 引入redux-thunk，支持异步
import thunk from "redux-thunk";


const store = createStore(countReducer,applyMiddleware(thunk))

export default store