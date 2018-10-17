import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Comment extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="comment" className="comment">
    			<div className="container">
        			<div className="row">
            			<div className="col-md-12">
                			<div className="main_comment sections">
                    			<div className="main_comment_content">
                        			<div className="single_comment">
                            			<div className="row">
                                			<div className="col-md-8 col-md-offset-2">
                                    			<div className="single_comment_image_left">
                                        			<img src="images/comment.png" alt="" />
                                    			</div>
                                				<div className="single_comment_content_right">
                                        			<p className="robotolight">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
                                        			<a href=""><h4><span className="separator4"></span> Jone Doe</h4></a>
                                    			</div>
                                			</div>
                            			</div>
                        			</div>
                        			<div className="single_comment">
                            			<div className="row">
                                			<div className="col-md-8 col-md-offset-2">
                                    			<div className="single_comment_image_left">
                                        			<img src="images/comment.png" alt="" />
                                    			</div>
                                    			<div className="single_comment_content_right">
                                        			<p className="robotolight">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
                                        			<a href=""><h4><span className="separator4"></span> Jone Doe</h4></a>
                                    			</div>
                                			</div>
                            			</div>
                        			</div>
                        			<div className="single_comment">
										<div className="row">
                                			<div className="col-md-8 col-md-offset-2">
                                    			<div className="single_comment_image_left">
                                        			<img src="images/comment.png" alt="" />
                                    			</div>
                                    			<div className="single_comment_content_right">
                                        			<p className="robotolight">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
                                        			<a href=""><h4><span className="separator4"></span> Jone Doe</h4></a>
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
		);
	}
}
