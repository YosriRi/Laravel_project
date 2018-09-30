import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import InfoForm from './InfoForm';

export default class Payment extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
      			<div className="py-5 text-center">
        			<h2>Formulaire de paiement</h2>
  				</div>
  				<div className="row">
  					<Cart />
  					<InfoForm />
  				</div>
			</div>
		);
	}
}

if (document.getElementById('paymentComponent')) {
	ReactDOM.render(<Payment />, document.getElementById('paymentComponent'));
}
