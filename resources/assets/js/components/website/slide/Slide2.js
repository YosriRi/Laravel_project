import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Slide2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const divStyle = {
			'backgroundImage': 'url(images/homebg2.jpg)'
		}
		return (
			<div className="carousel-item" style={divStyle}>
              	<div className="carousel-caption d-none d-md-block">
              	</div>
            </div>
		);
	}
}
