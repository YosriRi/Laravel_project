import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubHeader from './SubHeader';
import Connected from './Connected';
import NotConnected from './NotConnected';
import Cookies from 'universal-cookie';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cookies: new Cookies(),
            user: []
        };
	}

	componentWillMount() {
		const currentComponent = this;
		const cookies = this.state.cookies.get('userCookie');

		if (cookies) {
			axios.get('/api/user?token=' + cookies)
	        .then(function (res) {
	            const result = res.data.user;
	            console.log(result, 'result');
	            currentComponent.setState({
	                user: result
	            });
	        })
	        .catch(function (error) {
	            console.log(error);
	        });
		}
	}

	render() {
		let connected;
		console.log(this.state.user, 'user');
		if (this.state.user) {
			console.log(this.state.user, 'user23');
			connected = <Connected user={this.state.user}/>;
			console.log(this.state.user, 'user2555');
		} else {
			console.log('ttrtretre');
			connected = <NotConnected />;
		}
		return (
			<div>
				<div className="toolbar">
					<div className="uou-block-1a blog">
						<div className="containerToolbar">
							<div className=" language">
								<a href="#"><img src="/images/France-Flag.ico" className="toggle" alt="FR" /></a>
								<a href="#"><img src="/images/United-Kingdom-Flag.ico" className="toggle" alt="EN" /></a>
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
							{connected}
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
