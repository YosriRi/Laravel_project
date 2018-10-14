import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Slide1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const divStyle = {
			'backgroundImage': 'url(images/homebg1.jpg)'
		}
		return (
			<div className="carousel-item active" style={divStyle}>
              	<div className="carousel-caption d-none d-md-block">
                	<h3>First Slide</h3>
                	<p>This is a description for the first slide.</p>
              	</div>
            </div>
		);
	}
}
