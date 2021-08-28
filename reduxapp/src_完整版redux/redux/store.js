/*
*该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
import {createStore} from 'redux' /*引入方法,专门创建redux中最核心的store对象*/
import countReducer from './cont_reducer' /*引入为cont组件服务的reducer*/

/*暴露store*/
export default createStore(countReducer)

