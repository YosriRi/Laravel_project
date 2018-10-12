import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Community extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="blog" className="blog">
    			<div className="container">
        			<div className="head_title text-center">
            			<h2>Communauté SO'Extreme</h2>
        				<div className="separator"></div>                          
        			</div>
        			<div className="row">
            			<div className="col-md-4">
                			<div className="single_blog">
                    			<div className="single_blog_img">
                        			<img src="images/blog1.jpg" alt="" />
                        			<div className="single_bolg_date">
                            			<h2>12</h2>
                            			<p className="robotolight">Jan</p>
                        			</div>
                    			</div>
                    			<div className="single_blog_content">
                        			<p className="monseratregular">Lorem ipsum dolor sit amet</p>
                        			<p>Consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        			<hr />
                        			<div className="single_blog_bottom_content">
                            			<a className="robotolight" href=""><i className="fa fa-eye"></i>552</a>
                            			<a className="robotolight" href=""><i className="fa fa-commenting"></i>17</a>
                        			</div>
                    			</div>
                			</div>
            			</div>
            			<div className="col-md-4">
                			<div className="single_blog">
                    			<div className="single_blog_img">
                        			<img src="images/blog2.jpg" alt="" />
                        			<div className="single_bolg_date">
                            			<h2>12</h2>
                            			<p className="robotolight">Jan</p>
                        			</div>
                    			</div>
                    			<div className="single_blog_content">
                        			<p className="monseratregular">sed do eiusmod tempor</p>
                        			<p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        			<hr />
                        			<div className="single_blog_bottom_content">
                            			<a className="robotolight" href=""><i className="fa fa-eye"></i>552</a>
                            			<a className="robotolight" href=""><i className="fa fa-commenting"></i>17</a>
                        			</div>
                    			</div>
                			</div>
            			</div>
            			<div className="col-md-4">
                			<div className="single_blog">
                    			<div className="single_blog_img">
                        			<img src="images/blog3.jpg" alt="" />
                        			<div className="single_bolg_date">
                            			<h2>12</h2>
                            			<p className="robotolight">Jan</p>
                    				</div>
                    			</div>
                    			<div className="single_blog_content">
                        			<p className="monseratregular">incididunt ut labore et dolore</p>
                        			<p>Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        			<hr />
                        			<div className="single_blog_bottom_content">
                            			<a className="robotolight" href=""><i className="fa fa-eye"></i>552</a>
                            			<a className="robotolight" href=""><i className="fa fa-commenting"></i>17</a>
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
