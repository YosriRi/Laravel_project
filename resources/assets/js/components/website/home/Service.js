import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Service extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="service" className="service">
    			<div className="container">
        			<div className="head_title text-center">
            			<h4 className="subtitle">We work with</h4>
            			<h2>Amazing Services</h2>
        				<div className="border_devider"></div>
        			</div>
        			<div className="row">
            			<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                    			<div className="single_service_icon">
                        			<i className="fa fa-clock-o"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Photography</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
            			<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                    			<div className="single_service_icon">
                        			<i className="fa fa-picture-o"></i>
	                    		</div>
                    			<div className="single_service_content">
	                        		<h3>Photography</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
            			<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                    			<div className="single_service_icon">
                        			<i className="fa fa-television"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Photography</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
            			<div className="border_devider"></div>
            			<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                				<div className="single_service_icon">
                        			<i className="fa fa-object-group"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Photography</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
        				<div className="col-lg-4 col-sm-6">
	                		<div className="single_service">
                    			<div className="single_service_icon">
                        			<i className="fa fa-home"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Photography</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
        				<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                    			<div className="single_service_icon">
                        			<i className="fa fa-book"></i>
                    			</div>
                    			<div className="single_service_content">
	                        		<h3>Photography</h3>
                    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
        			</div>        
    			</div>
			</section>
		);
	}
}
