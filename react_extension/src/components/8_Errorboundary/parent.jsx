import React,{ Component } from 'react'
import Child from "./child";
export default class Parent extends Component{
    state = {hasError:''}  //用于标识子组件是否产生错误
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        return (
            <div>
                <h2>我是parent</h2>
                {this.state.hasError ? <h2>网络崩溃</h2> : <Child/>}
            </div>
        );
    }
}