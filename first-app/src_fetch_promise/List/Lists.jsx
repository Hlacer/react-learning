import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './Lists.css'

export default class List extends Component {

	state = {/*初始化状态*/
		isFirst:true,/*是否刚打开页面*/
		isLoading:false,/*是否加载中*/
		users:[],/*users值为数组*/
		isError:''/*存储储存相关的错误信息*/
	}

	/*组件一旦挂载就订阅消息*/
	componentDidMount() {
		this.token = PubSub.subscribe('atguigu',(message,setObj)=>{
			this.setState(setObj)
		})
	}

	componentWillUnmount() {
		PubSub.unsubscribe(this.token)
	}

	render() {
		const {users,isFirst,isLoading,isError} = this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>结果将在此处展示</h2> :
						isLoading ? <h2>搜索中......</h2> :
							isError ? <h2 style={{color:'red'}}>{isError}</h2> :
					users.map((userObj)=>{
						return (
							<div className="card" key={userObj.id}>
								<a href={userObj.html_url} target='_blank' rel="noreferrer" >
									<img src={userObj.avatar_url} style={{width:100+'px'}} alt='图片打开失败'/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
