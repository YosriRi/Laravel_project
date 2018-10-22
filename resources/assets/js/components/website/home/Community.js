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
                            			<h2>22</h2>
                            			<p className="robotolight">Jan</p>
                        			</div>
                    			</div>
                    			<div className="single_blog_content">
                        			<p className="monseratregular">Sortie Kayak So'Extreme</p>
                        			<p></p>
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
                            			<h2>2</h2>
                            			<p className="robotolight">Fev</p>
                        			</div>
                    			</div>
                    			<div className="single_blog_content">
                        			<p className="monseratregular">Première expérience Chute libre</p>
                        			<p></p>
                        			<hr />
                        			<div className="single_blog_bottom_content">
                            			<a className="robotolight" href=""><i className="fa fa-eye"></i>641</a>
                            			<a className="robotolight" href=""><i className="fa fa-commenting"></i>82</a>
                        			</div>
                    			</div>
                			</div>
            			</div>
            			<div className="col-md-4">
                			<div className="single_blog">
                    			<div className="single_blog_img">
                        			<img src="images/blog3.jpg" alt="" />
                        			<div className="single_bolg_date">
                            			<h2>5</h2>
                            			<p className="robotolight">Fev</p>
                    				</div>
                    			</div>
                    			<div className="single_blog_content">
                        			<p className="monseratregular">Saut en parachute Tandem</p>
                        			<p></p>
                        			<hr />
                        			<div className="single_blog_bottom_content">
                            			<a className="robotolight" href=""><i className="fa fa-eye"></i>212</a>
                            			<a className="robotolight" href=""><i className="fa fa-commenting"></i>32</a>
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
