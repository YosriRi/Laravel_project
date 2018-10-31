import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PaymentSuccess extends Component {
	constructor(props) {
		super(props);
	}

  

	render() {
		return (
            <div className="container successpage">
     			<div class="alert alert-success" role="alert">
					<h4 class="alert-heading">Félicitaitons!</h4>
					<p>Félicitaitons ! Vous payement a été effectué avec succés! Vous Pouvez vérifier votre boite mails vous receverez un mail de confirmation avec un récapitulatif de votre achat.</p>
					<hr />
					<p class="mb-0">Si Vous voulez rechercher une autre activité cliquer <a href= "/home">ici</a> , Pour vous rediriger vers la page d'accueil.</p>
				</div>
			</div>
            );
	}
}

if (document.getElementById('paymentSuccessComponent')) {
	ReactDOM.render(<PaymentSuccess />, document.getElementById('paymentSuccessComponent'));
}
