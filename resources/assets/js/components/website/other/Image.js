import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Image extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="main_portfolio_content text-center">
                <div className="grid">
                    <div className="grid-item">
                        <img src="images/pf1.jpg" alt="" />
                    	<div className="grid_item_overlay all_overlay">
                            <i className="fa fa-picture-o"></i>
                            <p className="monseratregular">chute libre indoor</p>
                            <p className="robotolight">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="images/pf2.jpg" alt="" />
                        <div className="grid_item_overlay all_overlay">
                            <i className="fa fa-picture-o"></i>
                            <p className="monseratregular">creatively designed</p>
                            <p className="robotolight">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="images/pf3.jpg" alt="" />
                        <div className="grid_item_overlay all_overlay grid-item--width2-overlay">
                            <i className="fa fa-picture-o"></i>
                            <p className="monseratregular">creatively designed</p>
                            <p className="robotolight">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="images/pf4.jpg" alt="" />
                        <div className="grid_item_overlay all_overlay">
                            <i className="fa fa-picture-o"></i>
                            <p className="monseratregular">creatively designed</p>
                            <p className="robotolight">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="images/pf5.jpg" alt="" />
                        <div className="grid_item_overlay all_overlay">
                            <i className="fa fa-picture-o"></i>
                            <p className="monseratregular">creatively designed</p>
                            <p className="robotolight">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="images/pf6.jpg" alt="" />
                        <div className="grid_item_overlay all_overlay">
                            <i className="fa fa-picture-o"></i>
                            <p className="monseratregular">creatively designed</p>
                            <p className="robotolight">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="images/pf7.jpg" alt="" />
                        <div className="grid_item_overlay all_overlay">
                            <i className="fa fa-picture-o"></i>
                            <p className="monseratregular">creatively designed</p>
                            <p className="robotolight">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}