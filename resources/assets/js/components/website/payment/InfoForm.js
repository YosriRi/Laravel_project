import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PaymentForm from './PaymentForm';

export default class InfoForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
			
					<div className="col-md-9 order-md-2 center">
						<h4 className="mb-3">Addresse de livraison</h4>
						<form className="needs-validation" noValidate="">
							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="firstName">Prénom</label>
									<input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
									<div className="invalid-feedback">
										Un nom Valide est nécessaire
									</div>
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="lastName">Nom</label>
									<input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
									<div className="invalid-feedback">
										Un prénom Valide est nécessaire
									</div>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="username">nom d'utilisateur</label>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">@</span>
									</div>
									<input type="text" className="form-control" id="username" placeholder="Username" required="" />
									<div className="invalid-feedback" style={{width: '100%'}}>
										Nom d'utilisateur est nécessaire
									</div>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="email">Email <span className="text-muted">(Nécessaire)</span></label>
								<input type="email" className="form-control" id="email" placeholder="you@example.com" />
								<div className="invalid-feedback">
									Veiller entrer une adresse valide pour la livraison.
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="address">Addresse </label>
								<input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
								<div className="invalid-feedback">
									Veiller entrer une adresse valide.
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="address2">Addresse 2 <span className="text-muted">(Optionnel)</span></label>
								<input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
							</div>
							<div className="row">
								<div className="col-md-5 mb-3">
									<label htmlFor="country">Pays</label>
									<select className="custom-select d-block w-100" id="country" required="">
										<option value="">Choisir...</option>
										<option>France</option>
									</select>
									<div className="invalid-feedback">
										Entrer Un pays valide.
									</div>
								</div>
								<div className="col-md-4 mb-3">
									<label htmlFor="state">Département</label>
									<select className="custom-select d-block w-100" id="state" required="">
										<option value="">Choisir...</option>
										<option>Ile-de-France</option>
									</select>
									<div className="invalid-feedback">
										Entrer un département Valide.
									</div>
								</div>
								<div className="col-md-3 mb-3">
									<label htmlFor="zip">Code postal</label>
									<input type="text" className="form-control" id="zip" placeholder="" required="" />
									<div className="invalid-feedback">
										Code postal nécessaire.
									</div>
								</div>
							</div>
							<hr className="mb-4" />
							
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="save-info" />
								<label className="custom-control-label" htmlFor="save-info">Sauvgarder ces informations pour prochains payements</label>
							</div>
							<hr className="mb-4" />
							<PaymentForm />
						</form>
					</div>
				
				</div>
			</div>
		);
	}
}