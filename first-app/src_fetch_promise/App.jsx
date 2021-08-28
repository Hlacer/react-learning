import React, { Component } from 'react'
import Search from './Search/Search'
import Lists from './List/Lists'

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Search/>
				<Lists/>
			</div>
		)
	}
}
