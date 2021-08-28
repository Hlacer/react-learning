import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";/*路由组件*/
import Header from "./components/Header";/*一般组件*/
import MyNavLink from "./components/MyNavLink";

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
							<MyNavLink to='/about'>About</MyNavLink>
							<MyNavLink to='/home'>Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/*注册路由  编写路由链接*/}
								<Switch>
									<Route path='/about' component={About}/>
									<Route path='/home' component={Home}/>{/*默认模糊匹配,加上exact(or='true')变成严格匹配*/}
									<Redirect to='/about' />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
