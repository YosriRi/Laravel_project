import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './home/Dashboard';
import Activity from './home/Activity';
import User from './home/User';
import Category from './home/Category';
import Type from './home/Type';
import Discount from './home/Discount';

export default class App extends Component {
	constructor(props) {
		super(props);
		const adminToken = localStorage.getItem('adminToken');

		if (adminToken === null) {
			window.location.replace("/backoffice/connexion");
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path='/backoffice' component={Dashboard} />
						<Route path='/backoffice/activites' component={Activity} />
						<Route path='/backoffice/utilisateurs' component={User} />
						<Route path='/backoffice/categories' component={Category} />
						<Route path='/backoffice/types' component={Type} />
						<Route path='/backoffice/promotions' component={Discount} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

if (document.getElementById('app')) {
	ReactDOM.render(<App />, document.getElementById('app'));
}
