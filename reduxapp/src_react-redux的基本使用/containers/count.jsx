import countUI from '../components/Header/Header' /*引入ui组件*/
import {connect} from 'react-redux' /*引入connect用于连接ui组件和redux*/
/*引入action*/
import {
    createIncrementAction,
    createDecrementAction,
    createDecrementAsyncAction
} from '../redux/count_action'

/*
mapStateToProps函数的返回的对象中的key作为传递给ui组件props的key，value作为传递给ui组件props的value------状态
*/
const mapStateToProps = (state) =>{
    return {count: state}
}

/*
mapDispatchToProps函数的返回的对象中的key作为传递给ui组件props的key，value作为传递给ui组件props的value------操作状态的方法
*/
const mapDispatchToProps = (dispatch) =>{
    return {
        jia:(data) =>{/*通知redux执行加法*/dispatch(createIncrementAction(data))},
        jian:(data) =>{dispatch(createDecrementAction(data))},
        asyncjia:(data,time) =>{dispatch(createDecrementAsyncAction(data,time))}
    }
}
/*创建并暴露一个count的容器组件*/
export default connect(mapStateToProps,mapDispatchToProps)(countUI)  /*connect的返回值依旧是函数*/