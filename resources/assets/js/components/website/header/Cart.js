import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: []
		};
	}

	componentWillReceiveProps(user) {
		const currentComponent = this;
		currentComponent.setState({
			user: user.user
		});
	}

	render() {
		return (
			<li className="nav-item">
				<a className="nav-link" href={'/panier/' + this.state.user.id}>
					<i className="fas fa-shopping-cart"></i>
				</a>
			</li>
		);
	}
}
