import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="toolbar">
				<div class="uou-block-1a blog">
					<div class="containerToolbar">
						<div class=" language">
							<a href="#"><img src="images/France-Flag.ico" class="toggle" alt="FR" /></a>
							<a href="#"><img src="images/United-Kingdom-Flag.ico" class="toggle" alt="EN" /></a>
						</div>
						<ul class="social">
							<li>
								<a href="" class="fa fa-facebook"></a>
							</li>
							<li>
								<a href="" class="fa fa-twitter"></a>
							</li>
							<li>
								<a href="" class="fa fa-google-plus"></a>
							</li>
						</ul>
						<ul class="authentification">
							<li>
								<a href="#login">Login</a>
							</li>
							<li>
								<p>|</p>
							</li>
							<li>
								<a href="#register">Register</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('headerComponent')) {
	ReactDOM.render(<Header />, document.getElementById('headerComponent'));
}
