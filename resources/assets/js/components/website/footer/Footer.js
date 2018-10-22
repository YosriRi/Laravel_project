import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubFooter from './SubFooter';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<section id="contact" className="footer_widget">
	        		<div className="container">
	            		<div className="row">
	                    	<div className="col-4">
	                        	<div className="single_widget wow fadeIn" data-wow-duration="800ms">
	                            	<div className="footer_logo">
	                                	<img src="/images/footerlogo.png" alt="" />
	                            	</div>
	                            	<p>So'Extreme est une centrale de réservation d’activités de loisirs. Sur So'Extreme vous trouverez plus de 60 activités à effectuer seul, en famille ou entre amis, partout en France. Sur so-extreme.com, plusieurs 
										choix s’offrent à vous selon votre recherche : vous pouvez soit réserver directement l’activité de votre choix soit offrir un bon cadeau à un proche pour qu’il effectue lui-même la réservation en toute liberté et selon ses envies So'Extreme est donc un excellent moyen pour trouver des idées de cadeaux originales et faire plaisir à coup sûr.</p>
	                            	<div className="footer_subcribs_area">
	                                	<p className="monseratregular"><strong>15k</strong> followers</p>
	                                	<hr />
	                            		<div className="flowus">
	                                    	<a href="" className="robotolight"> Suivez-Nous : </a>
	                                    	<a href=""><i className="fa fa-facebook"></i></a>
	                                    	<a href=""><i className="fa fa-twitter"></i></a>
	                                    	<a href=""><i className="fa fa-google-plus"></i></a>
	                                    	<a href=""><i className="fa fa-instagram"></i></a>
	                                    	<a href=""><i className="fa fa-pinterest-p"></i></a>
	                                    	<a href=""><i className="fa fa-youtube"></i></a>
	                                    	<a href=""><i className="fa fa-rss"></i></a>
	                                    	<a href=""><i className="fa fa-dribbble"></i></a>
	                                	</div>
	                                	<form className="navbar-form navbar-left" role="search">
	                                    	<div className="form-group">
	                                        	<input type="text" className="form-control" placeholder="Search" />
	                                        	<button type="submit" className="submit_btn">Souscrire</button>
	                                    	</div>
	                                	</form>
	                            	</div>
	                        	</div>
	                    	</div>
	                    	<div className="col-8">
	                        	<div className="row">
	                            	<div className="col-6">
	                                	<div className="single_widget wow fadeIn" data-wow-duration="800ms">
	                                    	<p className="monseratregular">Derniers posts</p>
	                                    	<span className="separator4"></span>
	                                		<div className="single_widget_blog">
	                                    		<div className="single_widget_img">
	                                        		<img src="/images/fb1.jpg" alt="" />
	                                    		</div>
	                                    		<div className="single_widget_content">
	                                        		<p className="monseratregular">So'Extreme: Nouvelle activité indoor: la Soufflerie!</p>
													<p className="robotolight">Jan 2, 2018</p>
												</div>
	                                		</div>
	                                		<div className="single_widget_blog">
	                                        	<div className="single_widget_img">
	                                            	<img src="/images/fb2.jpg" alt="" />
	                                        	</div>
	                                        	<div className="single_widget_content">
	                                            	<p className="monseratregular">So'Extreme: première agence de sensation forte de la région</p>
	                                            	<p className="robotolight">Jan 4, 2018</p>
	                                        	</div>
	                                    	</div>
	                                		<div className="single_widget_blog">
	                                        	<div className="single_widget_img">
	                                            	<img src="/images/fb3.jpg" alt="" />
	                                        	</div>
	                                        	<div className="single_widget_content">
	                                            	<p className="monseratregular">Gorge Du Verdan: Nouvelles activités dans la région!</p>
	                                            	<p className="robotolight">Jan 15, 2018</p>
	                                        	</div>
	                                    	</div>
	                                	</div>
	                            	</div>
	                            	<div className="col-6">
	                                	<div className="single_widget wow fadeIn" data-wow-duration="800ms">
	                                    	<p className="monseratregular">instagram</p>
	                                    	<span className="separator4"></span>
	                                    	<div className="footer_gellary">
	                                        	<div className="row">
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="/images/fg1.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="/images/fg2.jpg" alt="" />
	                                            	</div>
		                                            <div className="col-md-4 col-6 no-padding">
	                                                	<img src="/images/fg3.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
		                                                <img src="/images/fg4.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="/images/fg5.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
		                                                <img src="/images/fg6.jpg" alt="" />
		                                            </div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="/images/fg7.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="/images/fg8.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
		                                                <img src="/images/fg9.jpg" alt="" />
	                                            	</div>
	                                        	</div>
	                                    	</div>
	                                	</div>
	                            	</div>
	                        	</div>
	                    	</div>
	            		</div>
	        		</div>
	    		</section>
	    		<SubFooter/>
	    	</div>
		);
	}
}

if (document.getElementById('footerComponent')) {
    ReactDOM.render(<Footer />, document.getElementById('footerComponent'));
}
