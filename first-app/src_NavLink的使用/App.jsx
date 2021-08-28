import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";/*路由组件*/
import Header from "./components/Header";/*一般组件*/

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/*
								原生HTML中靠a标签跳转不同的页面
								<a className="list-group-item active" href="./about.html">About</a>
								<a className="list-group-item" href="./home.html">Home</a>
							*/}

							{/*react靠路由实现组件切换*/}
								<NavLink className="list-group-item" activeClassName='demo' to='/about'>About</NavLink>
								<NavLink className="list-group-item" activeClassName='demo' to='/home'>Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/*注册路由  编写路由链接*/}
								<Route path='/about' component={About}/>
								<Route path='/home' component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
