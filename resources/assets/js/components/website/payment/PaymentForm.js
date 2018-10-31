import React, { Component } from 'react';
import PaypalButton from './PaypalButton';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
<<<<<<< HEAD
		const onSuccess = (payment) => {
			console.log('Successful payment!', payment);
			NotificationManager.success('Message de succès', 'Paiement accepté');
		}
  
	  	const onError = (error) => {
			console.log('Erroneous payment OR failed to load script!', error);
			NotificationManager.error('Message d\'erreur', 'Il y a eu un problème lors du paiement');
		}
=======
		const onSuccess = (payment) =>
		console.log('Payement réussi!', payment);
		window.location.replace("/paymentsuccess");

	  const onError = (error) =>
		console.log('Erroneous payment OR failed to load script!', error);
>>>>>>> dev
  
	  	const onCancel = (data) => {
			console.log('Cancelled payment!', data);
			NotificationManager.info('Paiement annulé');
		}

		const total = localStorage.getItem('totalCart');

		return (
			<div>
				<h4 className="mb-3">Payment</h4>
            	<div className="d-block my-3">
					<PaypalButton
						client={CLIENT}
						env={'sandbox'}
						commit={true}
						currency={'EUR'}
						total={total}
						onSuccess={onSuccess}
						onError={onError}
						onCancel={onCancel}
					/>
            	</div>
				<NotificationContainer/>
			</div>
		);
	}
}
export default PaymentForm;