import React,{ Component } from 'react'
import {connect} from 'react-redux' /*引入connect用于连接ui组件和redux*/
/*引入action*/
import {
    createIncrementAction,
    createDecrementAction,
    createDecrementAsyncAction
} from '../redux/actions/count'

class Header extends Component{

    incrementa = () =>{
        const {value} = this.selectNum
        // 通知redux+value
        this.props.jia(Number(value))
    }
    decrement = () =>{
        const {value} = this.selectNum
        this.props.jian(Number(value))
    }
    ifAdd = () =>{
        const {value} = this.selectNum
        if(this.props.count %2 !==0){
            this.props.jia(Number(value))
        }
    }
    asyncAdd = () =>{
        const {value} = this.selectNum
        this.props.asyncjia(Number(value),500)
    }
    render() {
        return (
            <div>
                <h1>count组件，person组件总人数为{this.props.renshu}</h1>
                <h4>当前求和为{this.props.count}</h4>
                <select ref={c=>this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br/>
                <button onClick={this.incrementa}>加</button>&nbsp;
                <button onClick={this.decrement}>减</button>&nbsp;
                <button onClick={this.ifAdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.asyncAdd}>异步加</button>
            </div>
        );
    }
}

export default connect(
    state =>({
        count: state.box1,
        renshu:state.box2.length
    }),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        asyncjia:createDecrementAsyncAction
    }
)(Header)  /*connect的返回值依旧是函数*/