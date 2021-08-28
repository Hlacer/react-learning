import React,{ Component } from 'react'
import './index.css'

export default class Parent extends Component{
    render() {
        return (
            <div className='parent'>
                <h3>我是parent</h3>
                <A render={(name)=><B name={name}/>}/>
            </div>
        );
    }
}

class A extends Component{
    state = {name:'hello'}
    render() {
        const {name} = this.state
        return (
            <div className='child'>
                <h3>我是child</h3>
                {this.props.render(name)}
            </div>
        );
    }
}

class B extends Component{
    render() {
        return (
            <div className='child1'>
                <h3>我是C,{this.props.name}</h3>
            </div>
        );
    }
}