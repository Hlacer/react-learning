import React,{ Component } from 'react'
export default class demo extends Component{
    state = {count:0}
    addOne = () =>{
        const {count} = this.state
        /*对象式 this.setState({count:count+1},()=>{
            console.log(this.state.count)
        })*/

        /*函数式*/
        this.setState((state,props)=>{
            console.log(state,props)
            return {count: state.count+1}
        },()=>{
            console.log(this.state.count)
        })
    }
    render() {
        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <button onClick={this.addOne}>点我+1</button>
            </div>
        );
    }
}