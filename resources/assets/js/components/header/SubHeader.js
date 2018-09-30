import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg nav_bg navbar-dark">
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src="images/logo.png" width="150" height="30" alt="So Extreme" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">Accueil
									<span className="sr-only">(current)</span>
								</a>
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
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fas fa-shopping-cart"></i>
								</a>
							</li>
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
