import { legacy_createStore as createStore,applyMiddleware } from "redux";
// import countReducer from './reducers/count_reducers'
// import  personReducers  from "./reducers/person";
import allReducers from './reducers/index'

// 引入redux-thunk，支持异步
import thunk from "redux-thunk";
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

// const allReducers = combineReducers({
//     a:countReducer,
//     b:personReducers
// })

const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))

export default store