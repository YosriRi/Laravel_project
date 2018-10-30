import React, { Component } from 'react';
import PaypalButton from './PaypalButton';

	const CLIENT = {
		sandbox: 'AU1vo9rmu63CqURJnN0hCQn_X5KtyFzsFlks2Y3QFIx5reb2-dWb2RQ-DQ1UXMntUcrI5HMaCkuHBwFB'
	// 	// process.env.PAYPAL_CLIENT_ID_SANDBOX,
	// 	// production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
	};
	// const ENV = process.env.NODE_ENV === 'production'
	// 	? 'production'
	// 	: 'sandbox';

class PaymentForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const onSuccess = (payment) =>
		console.log('Successful payment!', payment);
  
	  const onError = (error) =>
		console.log('Erroneous payment OR failed to load script!', error);
  
	  const onCancel = (data) =>
		console.log('Cancelled payment!', data);

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
					<PaypalButton
						client={CLIENT}
						env={'sandbox'}
						commit={true}
						currency={'EUR'}
						total={100}
						onSuccess={onSuccess}
						onError={onError}
						onCancel={onCancel}
					/>
			</div>
		);
	}
}
export default PaymentForm;