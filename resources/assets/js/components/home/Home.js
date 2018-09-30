import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';
import Service from './Service';
import Description from './Description';
import Promotion from './Promotion';
import ClientLogo from './ClientLogo';
import Client from './Client';
import Community from './Community';

export default class Home extends Component {
	constructor(props) {
		super(props); 
	}

	render() {
		return (
            <div>
                <Field />
                <Service />
                <Description />
                <Promotion />
                <ClientLogo />
                <Client />
                <Community />
            </div>
		);
	}
}

if (document.getElementById('homeComponent')) {
	ReactDOM.render(<Home />, document.getElementById('homeComponent'));
}
