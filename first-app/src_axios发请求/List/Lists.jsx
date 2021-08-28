import React, { Component } from 'react'
import './Lists.css'

export default class List extends Component {
	render() {
		const {users,isFirst,isLoading,isError} = this.props
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
