import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubHeader from './SubHeader';
import Connected from './Connected';
import NotConnected from './NotConnected';
import Cookies from 'universal-cookie';

export default class Header extends Component {
	constructor(props) {
		super(props);
		const cookies = new Cookies();
		const currentComponent = this;
        const cookie = cookies.get('userCookie');

		this.state = {
            user: [],
            cookie: cookie
        };

        if (cookie !== undefined) {
			axios.get('/api/user?token=' + cookie)
	        .then(function (res) {
	            const result = res.data.user;
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
		const user = this.state.user;

		if (this.state.cookie !== undefined) {
			connected = <Connected user={user}/>;
		} else {
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
				<SubHeader user={user}/>
			</div>
		);
	}
}

if (document.getElementById('headerComponent')) {
	ReactDOM.render(<Header />, document.getElementById('headerComponent'));
}
