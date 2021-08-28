/*
*该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
import {createStore,applyMiddleware,combineReducers} from 'redux' /*引入方法,专门创建redux中最核心的store对象*/
import countReducer from './reducers/count' /*引入为cont组件服务的reducer*/
import personReducer from "./reducers/person";/*引入为person组件服务的reducer*/
import thunk from "redux-thunk";/*用于支持异步action*/

/*合并所有reducer变为一个总的reducer，，，，传入的对象就是redux保存的总状态对象*/
const allReducer = combineReducers({
    box1:countReducer,
    box2:personReducer
})
/*暴露store*/
export default createStore(allReducer,applyMiddleware(thunk))

