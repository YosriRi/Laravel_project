import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';

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

		const cookies = new Cookies();

		cookies.remove('userCookie');
		alert('Déconnexion réussi');
        location.reload();
	}

	render() {
		const user = this.state.user;
		return (
			<ul className="authentification">
				<li>
					<a href={'/profile/' + user.id}>{user.firstname + ' ' + user.lastname}</a>
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
