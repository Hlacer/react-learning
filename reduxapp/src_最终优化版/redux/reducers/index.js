/*
* 该文件用于汇总所有的reducer作为一个总的reducer
*/
import {combineReducers} from 'redux' /*用于汇总多个reducer*/
import countReducer from './count' /*引入为cont组件服务的reducer*/
import personReducer from "./person";/*引入为person组件服务的reducer*/


/*合并所有reducer变为一个总的reducer，，，，传入的对象就是redux保存的总状态对象*/
export default combineReducers({
    count:countReducer,
    persons:personReducer
})

