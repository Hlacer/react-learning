import React,{ Component } from 'react'
export default class Header extends Component{
    state = {count:0}
    incrementa = () =>{
        const {value} = this.selectNum
        const {count} = this.state
        this.setState({count:count+Number(value)})
    }
    decrement = () =>{
        const {value} = this.selectNum
        const {count} = this.state
        this.setState({count:count-Number(value)})
    }
    ifAdd = () =>{
        const {value} = this.selectNum
        const {count} = this.state
        if (count %2 !== 0){
            this.setState({count:count+Number(value)})
        }
    }
    asyncAdd = () =>{
        const {value} = this.selectNum
        const {count} = this.state
        setTimeout(()=>{
            this.setState({count:count+Number(value)})
        },500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
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