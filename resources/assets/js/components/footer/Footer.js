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
	                                	<img src="images/footerlogo.png" alt="" />
	                            	</div>
	                            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
	                            	<div className="footer_subcribs_area">
	                                	<p className="monseratregular"><strong>15k</strong> followers</p>
	                                	<hr />
	                            		<div className="flowus">
	                                    	<a href="" className="robotolight"> Follow Us : </a>
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
	                                        	<button type="submit" className="submit_btn">Subscribe</button>
	                                    	</div>
	                                	</form>
	                            	</div>
	                        	</div>
	                    	</div>
	                    	<div className="col-8">
	                        	<div className="row">
	                            	<div className="col-6">
	                                	<div className="single_widget wow fadeIn" data-wow-duration="800ms">
	                                    	<p className="monseratregular">Dernières posts</p>
	                                    	<span className="separator4"></span>
	                                		<div className="single_widget_blog">
	                                    		<div className="single_widget_img">
	                                        		<img src="images/fb1.jpg" alt="" />
	                                    		</div>
	                                    		<div className="single_widget_content">
	                                        		<p className="monseratregular">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
													<p className="robotolight">Jan 9, 2016</p>
												</div>
	                                		</div>
	                                		<div className="single_widget_blog">
	                                        	<div className="single_widget_img">
	                                            	<img src="images/fb2.jpg" alt="" />
	                                        	</div>
	                                        	<div className="single_widget_content">
	                                            	<p className="monseratregular">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
	                                            	<p className="robotolight">Jan 9, 2018</p>
	                                        	</div>
	                                    	</div>
	                                		<div className="single_widget_blog">
	                                        	<div className="single_widget_img">
	                                            	<img src="images/fb3.jpg" alt="" />
	                                        	</div>
	                                        	<div className="single_widget_content">
	                                            	<p className="monseratregular">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
	                                            	<p className="robotolight">Jan 9, 2018</p>
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
	                                                	<img src="images/fg1.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="images/fg2.jpg" alt="" />
	                                            	</div>
		                                            <div className="col-md-4 col-6 no-padding">
	                                                	<img src="images/fg3.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
		                                                <img src="images/fg4.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="images/fg5.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
		                                                <img src="images/fg6.jpg" alt="" />
		                                            </div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="images/fg7.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
	                                                	<img src="images/fg8.jpg" alt="" />
	                                            	</div>
	                                            	<div className="col-md-4 col-6 no-padding">
		                                                <img src="images/fg9.jpg" alt="" />
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
