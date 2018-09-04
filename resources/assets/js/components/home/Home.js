import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
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
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	            	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
	            	<span className="sr-only">Previous</span>
	          	</a>
	          	<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	            	<span className="carousel-control-next-icon" aria-hidden="true"></span>
	            	<span className="sr-only">Next</span>
	          	</a>
			</div>
		);
	}
}

if (document.getElementById('homeComponent')) {
	ReactDOM.render(<Home />, document.getElementById('homeComponent'));
}
