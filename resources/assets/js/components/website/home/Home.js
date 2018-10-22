import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD:resources/assets/js/components/website/home/Home.js
import Slide from '../slide/Slide';
=======
import Slider from '../slide/slide';
>>>>>>> dev:resources/assets/js/components/home/Home.js
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
<<<<<<< HEAD:resources/assets/js/components/website/home/Home.js
                <Slide />
=======
                <Slider />
>>>>>>> dev:resources/assets/js/components/home/Home.js
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
