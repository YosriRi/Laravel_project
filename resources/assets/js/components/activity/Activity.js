import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Sidebar from './Sidebar';

export default class Activity extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<Content/>
					<Sidebar/>
				</div>
			</div>
		);
	}
}

if (document.getElementById('activityComponent')) {
    ReactDOM.render(<Activity />, document.getElementById('activityComponent'));
}
