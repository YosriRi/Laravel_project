import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Description extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="soufflerie" className="soufflerie">
    			<div className="container">
                    <div className="head_title text-center">
                        <h4 className="subtitle">Soufflerie</h4>
                        <h2>Description</h2>
                        <div className="border_devider"></div>
                        <p>
                        	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat.
                        </p>
                    </div>
    				<div className="row">
                		<div className="col">
                    		<div className="single_soufflerie">
                        		<div className="single_soufflerie_img">
                            		<img src="images/soufflerie.jpg" alt="" />
                        		</div>
                    		</div>
	                	</div>
                		<div className="col">
                    		<div className="single_soufflerie">
                        		<div className="single_soufflerie_acording">
                            		<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                		<div className="panel panel-default">
                                    		<div className="panel-heading" role="tab" id="headingOne">
                                        		<h4 className="panel-title">
                                        			<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                		<i className="fa fa-picture-o"></i> Gallerie <i className="fa fa-chevron-down"></i>
                                        			</a>
                                        		</h4>
                                    		</div>
                                    		<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    			<div className="panel-body">
                                            		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        		</div>
                                    		</div>
                                		</div>
                                		<div className="panel panel-default">
                                    		<div className="panel-heading" role="tab" id="headingTwo">
                                        		<h4 className="panel-title">
                                        			<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                		<i className="fa fa-map-signs"></i> Descriptions <i className="fa fa-chevron-down"></i>
                                            		</a>
                                        		</h4>
                                    		</div>
                                    		<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        		<div className="panel-body">
                                            		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                            		dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
		                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                            		nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        		</div>
                                    		</div>
                                		</div>
                                		<div className="panel panel-default">
                                    		<div className="panel-heading" role="tab" id="headingThree">
                                        		<h4 className="panel-title">
                                        			<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                		<i className="fa fa-bullseye"></i> Equipements <i className="fa fa-chevron-down"></i>
                                            		</a>
                                        		</h4>
                                    		</div>
                                    		<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        		<div className="panel-body">
                                            		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                            		dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                                            		ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                            		nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                            		culpa qui officia deserunt mollit anim id est laborum.
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
