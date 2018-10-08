import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';

export default class Connected extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.user, 'props');
	}

	logout(event) {
		event.preventDefault();

		const cookies = new Cookies();

		axios.get('/api/logout?token=' + cookies.get('userCookie'))
        .then(function (res) {
            alert('Déconnexion réussi');
            window.location.replace("/login");
        })
        .catch(function (error) {
            console.log(error);
            alert('Déconnexion impossible');
        });
	}

	render() {
		return (
			<ul className="authentification">
				<li>
					<a href="#">sdfd</a>
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
