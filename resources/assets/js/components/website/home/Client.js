import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Client extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="client" className="client">
    			<div className="home-overlay">
        			<div className="container">
                		<div className="head_title text-center">
                    		<h2>Avis clients</h2>
                    		<div className="separator"></div>
                		</div>
                		<div className="row">
                    		<div className="col-6">
                        		<div className="single_client">
                            		<div className="single_client_img">
                                		<img className="img-circle img-responsive" src="images/cl1.jpg" alt="" />
                            		</div>
                            		<div className="single_client_content">
                                		<p className="monseratregular">Matthew Dix</p>
                                		<p className="robotolight">Amateur saut en parachute</p>
                                		<span className="separator4"></span>
                                		<p>
                                			So'Extreme Vous êtes les meilleurs! J'ai beaucoup aimé l'ambiance, l'accueil, tout!! Merci pour toute l'équipe!
                                		</p>
                            		</div>
                        		</div>
                    		</div>
                    		<div className="col-6">
                        		<div className="single_client">
                            		<div className="single_client_img">
                                		<img className="img-circle img-responsive" src="images/cl2.jpg" alt="" />
                            		</div>
                        			<div className="single_client_content">
                                		<p className="monseratregular">Maxime Fresh</p>
                                		<p className="robotolight">développeur</p>
                                		<span className="separator4"></span>
                                		<p>
                                			Meilleure expérience de ma vie!! Vous êtes les BEST!! Je recommande fortement!!
                                		</p>
                            		</div>
                        		</div>
                    		</div>
                    		<div className="col-6">
                        		<div className="single_client">
                            		<div className="single_client_img">
                                		<img className="img-circle img-responsive" src="images/cl3.jpg" alt="" />
                        			</div>
                            		<div className="single_client_content">
                                		<p className="monseratregular">Philippe Montat</p>
                                		<p className="robotolight">Responsable Administratif</p>
                                		<span className="separator4"></span>
                                		<p>
                                			Equipe accuiellant et souriant!! Je me suis senti en sécurité toute au long de l'activité!! Merci l'équipe SO'Extreme!
                                    	</p>
                            		</div>
                        		</div>
                    		</div>
                    		<div className="col-6">
                        		<div className="single_client">
                            		<div className="single_client_img">
                                		<img className="img-circle img-responsive" src="images/cl4.jpg" alt="" />
                        			</div>
                            		<div className="single_client_content">
                                		<p className="monseratregular">John Hard</p>
                                		<p className="robotolight">Comédien</p>
                                		<span className="separator4"></span>
                                		<p>
                                			A refaire! J'ai recommandé à tout mon entourage! Merci pour l'accueil et pour une expérience inoubliable!
                                		</p>
                            		</div>
                        		</div>
                    		</div>
                		</div>
        			</div>
    			</div>
			</section>
		);
	}
}
