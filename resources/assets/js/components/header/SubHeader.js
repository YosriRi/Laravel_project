import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import Cart from './Cart';

export default class SubHeader extends Component {
	constructor(props) {
		super(props);
		const cookies = new Cookies();

		this.state = {
            user: [],
            cookie: cookies.get('userCookie')
        };
	}

	componentWillReceiveProps(user) {
		const currentComponent = this;
		currentComponent.setState({
			user: user.user
		});
	}

	render() {
		const user = this.state.user;
		let cartLink;

		if (this.state.cookie !== undefined) {
			cartLink = <Cart user={user} />
		}
		return (
			<nav className="navbar navbar-expand-lg nav_bg navbar-dark">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img src="/images/logo.png" width="150" height="30" alt="So Extreme" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">Accueil</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/activity">Nos activités</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Nos Terrains de jeu</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Nouveauté ! Soufflerie</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">A propos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Blog</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contact</a>
							</li>
							{cartLink}
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fas fa-search"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
