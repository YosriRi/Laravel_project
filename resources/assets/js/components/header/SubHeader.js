import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';

export default class SubHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
            user: [],
            token: localStorage.getItem('userToken')
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
		if (this.state.token !== null) {
			cartLink = <Cart user={user} />
		}
		return (
			<nav className="navbar navbar-expand-lg nav_bg navbar-dark">
				<div className="container">
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
								<a className="nav-link" href="/#terrain">Nos Terrains de jeu</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/#soufflerie">Nouveauté ! Soufflerie</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/about">A propos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/#contact">Contact</a>
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
