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
            			<h4 className="subtitle">Nous Travaillons Avec</h4>
            			<h2>Des Services formidables</h2>
        				<div className="border_devider"></div>
        			</div>
        			<div className="row">
            			<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                    			<div className="single_service_icon">
                        			<i className="fa fa-clock-o"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Réservation en 5 min</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
            			<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                    			<div className="single_service_icon">
								<i className="fas fa-gift"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Offrir une activité</h3>
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
	                        		<h3>Renseignements</h3>
                    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
        			<div className="border_devider"></div>
						<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                    			<div className="single_service_icon">
                        			<i className="fa fa-picture-o"></i>
	                    		</div>
                    			<div className="single_service_content">
	                        		<h3>Photographie Professionnelle</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
            			<div className="col-lg-4 col-sm-6">
                			<div className="single_service">
                				<div className="single_service_icon">
                        			<i className="fa fa-object-group"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Partage d'expérience</h3>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    			</div>
                			</div>
            			</div>
        				<div className="col-lg-4 col-sm-6">
	                		<div className="single_service">
                    			<div className="single_service_icon">
									<i className="fas fa-users"></i>
                    			</div>
                    			<div className="single_service_content">
                        			<h3>Communauté Sportive</h3>
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
