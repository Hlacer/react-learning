/*
*该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
import {createStore,applyMiddleware} from 'redux' /*引入方法,专门创建redux中最核心的store对象*/
/*引入汇总之后的reducer*/
import allReducer from './reducers/index'
import thunk from "redux-thunk";/*用于支持异步action*/
import {composeWithDevTools} from "redux-devtools-extension"; /*使用开发者工具*/


/*暴露store    applyMiddleware(thunk)*/
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

