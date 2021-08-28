import React,{ Component } from 'react'

export default class Header extends Component{

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
                <h1>当前求和为{this.props.count}</h1>
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