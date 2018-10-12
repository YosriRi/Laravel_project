import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NotConnected extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="authentification">
				<li>
					<a href="/login">Login</a>
				</li>
				<li>
					<p>|</p>
				</li>
				<li>
					<a href="/register">Register</a>
				</li>
			</ul>
		);
	}
}
