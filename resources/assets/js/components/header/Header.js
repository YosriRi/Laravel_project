import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubHeader from './SubHeader';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="toolbar">
					<div className="uou-block-1a blog">
						<div className="containerToolbar">
							<div className=" language">
								<a href="#"><img src="images/France-Flag.ico" className="toggle" alt="FR" /></a>
								<a href="#"><img src="images/United-Kingdom-Flag.ico" className="toggle" alt="EN" /></a>
							</div>
							<ul className="social">
								<li>
									<a href="" className="fa fa-facebook"></a>
								</li>
								<li>
									<a href="" className="fa fa-twitter"></a>
								</li>
								<li>
									<a href="" className="fa fa-google-plus"></a>
								</li>
							</ul>
							<ul className="authentification">
								<li>
									<a href="/login">Login</a>
								</li>
								<li>
									<p>|</p>
								</li>
								<li>
									<a href="/register">Register</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<SubHeader/>
			</div>
		);
	}
}

if (document.getElementById('headerComponent')) {
	ReactDOM.render(<Header />, document.getElementById('headerComponent'));
}
