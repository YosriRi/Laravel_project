import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {
	constructor(props) {
		super(props);
	}

  

	render() {
		return (
            <div className="container">
            <title>Qui sommes-nous ?</title>
            <div className="border_devider"></div>
            </div>
            );
	}
}

if (document.getElementById('AboutComponent')) {
	ReactDOM.render(<About />, document.getElementById('AboutComponent'));
}
