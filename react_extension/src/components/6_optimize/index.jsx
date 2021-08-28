import React,{ PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent{
    state = {cars:'宝马'}
    change = () =>{
        this.setState(()=>{
            return {cars:'奔驰'}
        })
    }
    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('---',this.props,'---',this.state)
        console.log(nextProps,nextState)
        if(this.state.cars === nextState.cars){
            return false
        }else {
            return true
        }
    }*/

    render() {
        console.log('parent')
        return (
            <div className='parent'>
                <h2>我是parent组件</h2>
                <span>{this.state.cars}</span>&nbsp;
                <button onClick={this.change}>点我换车</button>
                <Child carname='奥拓'/>
            </div>
        );
    }
}

class Child extends PureComponent{

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('---',this.props,'---',this.state)
        console.log(nextProps,nextState)
        if(this.props.carname === nextProps.carname){
            return false
        }else{
            return true
        }
    }*/

    render() {
        console.log('child')
        return (
            <div className='child'>
                <h2>我是child组件</h2>
                <span>{this.props.carname}</span>
            </div>
        );
    }
}