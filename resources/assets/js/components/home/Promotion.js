import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Promotion extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="Promotions" className="Promotions">
    			<div className="container">
        			<div className="head_title text-center">
            			<h4 className="subtitle">DÉCOUVREZ</h4>
	            		<h2>TOUTES NOS PROMOTIONS</h2>
            			<div className="border_devider"></div>
            			<p>
						nous mettons un point d’honneur à vous fournir les plus belles activités au meilleur prix. 
						C’est pourquoi nous proposons tout au long de l’année une large sélection de loisirs et activités en promotion.
						Quels que soient vos goûts, nous mettons régulièrement en ligne de nouvelles promotions; soyez donc sûr 
						de trouver une activité à petit prix. Vous vous en souviendrez longtemps et votre porte-monnaie aussi !
            			</p>
        			</div>
        			<div className="row text-center">
                		<div className="col">
                			<div className="single_Promotions">
                        		<div className="single_Promotions_img">
                            		<img src="images/Promotions1.jpg" alt="" />
                            		<div className="single_Promotions_overlay all_overlay">
                                		<a href=""><i className="fa fa-facebook"></i></a>
                            			<a href=""><i className="fa fa-twitter"></i></a>
                            			<a href=""><i className="fa fa-pinterest-p"></i></a>
                                		<a href=""><i className="fa fa-instagram"></i></a>
                            		</div>
                        		</div>
                        		<div className="single_Promotions_content">
	                            	<h5>Parapente</h5>
                            		<p className="robotolight">lorem ipsum</p>
                        		</div>
                    		</div>
                		</div>
                		<div className="col">
                    		<div className="single_Promotions">
                        		<div className="single_Promotions_img">
                            		<img src="images/Promotions2.jpg" alt="" />
                            		<div className="single_Promotions_overlay all_overlay">
                                		<a href=""><i className="fa fa-facebook"></i></a>
                                		<a href=""><i className="fa fa-twitter"></i></a>
                                		<a href=""><i className="fa fa-pinterest-p"></i></a>
                                		<a href=""><i className="fa fa-instagram"></i></a>
                            		</div>
                        		</div>
                        		<div className="single_Promotions_content">
                            		<h5>Canoe-Kayak</h5>
                            		<p className="robotolight">lorem ipsum</p>
                        		</div>
                    		</div>
                		</div>
                		<div className="col">
                    		<div className="single_Promotions">
                        		<div className="single_Promotions_img">
                            		<img src="images/Promotions3.jpg" alt="" />
                            		<div className="single_Promotions_overlay all_overlay">
                                		<a href=""><i className="fa fa-facebook"></i></a>
                                		<a href=""><i className="fa fa-twitter"></i></a>
                                		<a href=""><i className="fa fa-pinterest-p"></i></a>
                                		<a href=""><i className="fa fa-instagram"></i></a>
                            		</div>
                        		</div>
                        		<div className="single_Promotions_content">
                            		<h5>Escalade</h5>
                            		<p className="robotolight">lorem ipsum</p>
                        		</div>
                    		</div>
                		</div>
        			</div>               
    			</div>
			</section>
		);
	}
}
