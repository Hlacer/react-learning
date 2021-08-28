import React, { Component } from 'react'
import axios from "axios";

export default class Search extends Component {
	getInput = () =>{
	    /*获取输入*/
		const {keyWordNode:{value:datas}} = this;//连续解构赋值并重命名
		/*发送请求前通知App更新*/
		this.props.updateAppState({isFirst: false,isLoading: true})
		/*发送请求*/
		axios.get(`http://localhost:3000/api1/search/users?q=${datas}`).then(
			response=>{
				/*请求成功后通知app更改状态*/
				this.props.updateAppState({isLoading: false,users: response.data.items})
			},
			error=>{
				/*请求失败后通知app更新状态*/
				this.props.updateAppState({isLoading: false,isError: error.message})
			}
		)
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordNode = c} type="text" placeholder="输入关键词"/>&nbsp;
					<button onClick={this.getInput}>搜索</button>
				</div>
			</section>
		)
	}
}
