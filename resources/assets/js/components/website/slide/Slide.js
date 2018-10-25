import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

export default class Slider extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="sliderHome">
				<div id="carouselExampleIndicators" className="fullslider carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner" role="listbox">
						<Slide1 />
						<Slide2 />
						<Slide3 />
					</div>
					
				</div>
				<div className="opacity">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<img src="/images/logo.png" className="sliderImg" width="350" height="50" alt="So Extreme" />
							{/* <h4 class="slideHeader">Réservation des activités extrêmes</h4> */}
							<form className="form-wrapper cf">
								<input type="text" placeholder="Rechercher une activité" required />
								<button type="submit">Rechercher</button>
							</form>
							<a href="/activity" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Toutes Nos activités</a>
						</div>
					</div>
				</div>

				</div>
			</div>
		);
	}
}

if (document.getElementById('slideComponent')) {
	ReactDOM.render(<Home />, document.getElementById('slideComponent'));
}
