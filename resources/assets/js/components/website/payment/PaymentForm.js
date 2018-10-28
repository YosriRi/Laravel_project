import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PaymentForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h4 className="mb-3">Payment</h4>
            	<div className="d-block my-3">
              		<div className="custom-control custom-radio">
                		<input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="" />
            			<label className="custom-control-label" htmlFor="credit">Carte banquaire</label>
              		</div>
              		<div className="custom-control custom-radio">
                		<input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                		<label className="custom-control-label" htmlFor="paypal">Paypal</label>
              		</div>
            	</div>
        		<div className="row">
              		<div className="col-md-6 mb-3">
                		<label htmlFor="cc-name">Propriétaire de la carte</label>
                		<input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                		<small className="text-muted">Nom complet écrit sur la carte</small>
                		<div className="invalid-feedback">
                  			Nom valide est nécessaire.
            			</div>
              		</div>
              		<div className="col-md-6 mb-3">
                		<label htmlFor="cc-number">Numéro de la carte</label>
            			<input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                		<div className="invalid-feedback">
                  			Numéro de carte valide est nécessaire.
            			</div>
              		</div>
        		</div>
            	<div className="row">
              		<div className="col-md-3 mb-3">
                		<label htmlFor="cc-expiration">Expiration</label>
                		<input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                		<div className="invalid-feedback">
                  			Date d'expiration valide est nécessaire.
                		</div>
              		</div>
              		<div className="col-md-3 mb-3">
                		<label htmlFor="cc-expiration">CVV</label>
                		<input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                		<div className="invalid-feedback">
                  			Code de sécurité valide est nécessaire.
                		</div>
              		</div>
            	</div>
            	<hr className="mb-4" />
            	<button className="btn btn-secondary btn-block text-uppercase" type="submit">Payer</button>
			</div>
		);
	}
}