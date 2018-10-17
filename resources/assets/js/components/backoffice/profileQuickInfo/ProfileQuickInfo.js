import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ProfileQuickInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="profile clearfix">
                <div className="profile_pic">
                    <img src="/images/ab1.jpg" alt="..." className="img-circle profile_img" />
                </div>
                <div className="profile_info">
                    <span>Welcome,</span>
                    <h2>John Doe</h2>
                </div>
            </div>
		);
	}
}

if (document.getElementById('profileQuickInfoComponent')) {
	ReactDOM.render(<ProfileQuickInfo />, document.getElementById('profileQuickInfoComponent'));
}
