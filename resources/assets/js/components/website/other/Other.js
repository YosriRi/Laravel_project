import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import Comment from './Comment';
import Map from './Map';

export default class Other extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<section id="portfolio" className="portfolio">
	    			<div className="container-fluid">
	        			<div className="row">
	            			<div className="main_portfolio sections">
	                			<div className="head_title text-center">
	                    			<h4 className="subtitle">What we do</h4>
	                    			<h2>some of our work</h2>
	                    			<div className="separator"></div>
	                				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
	            				</div>
	            				<Image />
	            			</div>
	    				</div>
					</div>
				</section>
				<Comment />
				<Map />
			</div>
		);
	}
}

if (document.getElementById('otherComponent')) {
	ReactDOM.render(<Other />, document.getElementById('otherComponent'));
}
