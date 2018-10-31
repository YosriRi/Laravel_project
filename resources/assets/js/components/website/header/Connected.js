import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Connected extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: []
		}
	}

	componentWillReceiveProps(user) {
		const currentComponent = this;
		currentComponent.setState({
			user: user.user
		});
	}

	logout(event) {
		event.preventDefault();
		localStorage.clear();
        window.location.replace("/");
	}

	render() {
		const user = this.state.user;
		return (
			<ul className="authentification">
				<li>
					<a href={'/profil/' + user.id}>{user.firstname + ' ' + user.lastname}</a>
				</li>
				<li>
					<p>|</p>
				</li>
				<li>
					<a href="#" onClick={this.logout}>Se déconnecter</a>
				</li>
			</ul>
		);
	}
}
