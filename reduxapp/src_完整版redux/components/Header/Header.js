import React,{ Component } from 'react'
import store from '../../redux/store'   /*引入store  获取redux中保存的状态*/
import {createDecrementAction,createIncrementAction} from '../../redux/count_action' /*引入action专门创建action对象*/
export default class Header extends Component{
    /*componentDidMount() {
        //组件一挂载  检测redux中状态的变化,只要变化就调用render
        store.subscribe(()=>{
            this.setState({})
        })
    }*/

    incrementa = () =>{
        const {value} = this.selectNum
        // 通知redux+value
        store.dispatch(createIncrementAction(Number(value)))
    }
    decrement = () =>{
        const {value} = this.selectNum
        store.dispatch(createDecrementAction(Number(value)))
    }
    ifAdd = () =>{
        const {value} = this.selectNum
        const count = store.getState()
        if (count %2 !== 0){
            store.dispatch(createIncrementAction(Number(value)))
        }
    }
    asyncAdd = () =>{
        const {value} = this.selectNum
        setTimeout(()=>{
            store.dispatch(createIncrementAction(Number(value)))
        },500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为{store.getState()}</h1>
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