import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Field extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="terrain" className="terrain">
                <div className="container">
                    <div className="my-4 text-center">
                      	<h2>Nos Terrains de jeu</h2>
                        <div className="border_devider"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_terrain">
                                <div className="single_terrain_img">
                                    <img src="images/ab1.jpg" alt="" />
                                </div>
                            	<div className="single_terrain_img_overlay all_overlay">
                                    <a href="">
                                        <h2>Air</h2>
                                    </a>
                                </div>
                            </div>
                            <h2>Air</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_terrain">
                                <div className="single_terrain_img">
                                    <img src="images/ab2.jpg" alt="" />
                                </div>
                                <div className="single_terrain_img_overlay all_overlay">
                                    <a href="">
                                        <h2>Eau</h2>
                                    </a>
                                </div>
                            </div>
                            <h2>Eau</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_terrain">
                                <div className="single_terrain_img">
                                    <img src="images/ab3.jpg" alt="" />
                                </div>
                                <div className="single_terrain_img_overlay all_overlay">
                                    <a href="">
                                        <h2>Terre</h2>
                                    </a>
                                </div>
                            </div>
                            <h2>Terre</h2>
                    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
			</section>
		);
	}
}
