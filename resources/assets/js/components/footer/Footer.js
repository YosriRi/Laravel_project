import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		);
	}
}

if (document.getElementById('footerComponent')) {
    ReactDOM.render(<Footer />, document.getElementById('footerComponent'));
}
