import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav class="navbar navbar-expand-lg nav_bg navbar-dark">
				<div class="container">
					<a class="navbar-brand" href="#">
						<img src="images/logo.png" width="150" height="30" alt="So Extreme" />
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">Accueil
									<span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Nos Terrains de jeu</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Nouveauté ! Soufflerie</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">A propos</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Blog</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Contact</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fas fa-shopping-cart"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fas fa-search"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

if (document.getElementById('menuComponent')) {
	ReactDOM.render(<Menu />, document.getElementById('menuComponent'));
}
