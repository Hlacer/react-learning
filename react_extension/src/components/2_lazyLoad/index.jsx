import React, { Component,lazy,Suspense } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Loading from "./loading";
const Home = lazy( ()=> {return import('./Home')} )
const About = lazy( ()=> import('./About') )

/*
* 千万不要用这种形式
* const Home = lazy(()=>{import(xxxxx)})   多了两个花括号就会报错.......
*/

export default class Index extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
								<NavLink className="list-group-item" to='/about'>About</NavLink>
								<NavLink className="list-group-item" to='/home'>Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Suspense fallback={<Loading/>}>
									<Route path='/about' component={About}/>
									<Route path='/home' component={Home}/>
								</Suspense>

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
