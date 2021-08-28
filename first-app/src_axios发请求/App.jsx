import React, { Component } from 'react'
import Search from './Search/Search'
import Lists from './List/Lists'

export default class App extends Component {
	state = {/*初始化状态*/
		isFirst:true,/*是否刚打开页面*/
		isLoading:false,/*是否加载中*/
		users:[],/*users值为数组*/
		isError:''/*存储储存相关的错误信息*/
	}
	updateAppState = (stateObj) =>{
		this.setState(stateObj)
		//对象属性和值一样可以简写 {users} ==> {users:users}
	}
	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<Lists {...this.state}/>
			</div>
		)
	}
}
