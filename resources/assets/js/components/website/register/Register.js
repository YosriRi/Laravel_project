import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FaAccessibleIcon } from 'react-icons/fa';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class Register extends Component {
	constructor(props) {
		super(props);
	}

    handleSubmit(event) {
        event.preventDefault();
        const target = event.target;

        const firstname         = target.inputFirstname.value;
        const lastname          = target.inputLastname.value;
        const email             = target.inputEmail.value;
        const password          = target.inputPassword.value;
        const confirmPassword   = target.inputConfirmPassword.value;

		if ($('#customCheck2').is(':checked')) {
			if (password === confirmPassword) {
				axios.post('/api/register', {
					firstname: firstname,
					lastname: lastname,
					email: email,
					password: password
				})
				.then(res => {
					NotificationManager.success('Message de succès', 'Inscription réussi');
					window.location.replace("/connexion");
				})
				.catch(function (error) {
					NotificationManager.error('Message d\'erreur', 'Problème lors de l\'inscription');
				});
			} else {
				NotificationManager.error('Message d\'erreur', 'Mot de passe différent');
			}
		} else {
			NotificationManager.error('Message d\'erreur', 'Vous devez accepter les CGU');
		}
    }

	render() {
		return (
			<div className="container">
    			<div className="row">
      				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        				<div className="card card-signin flex-row my-5">
          					<div className="card-body">
            					<h5 className="card-title text-center">Inscription</h5>
            					<form className="form-signin" onSubmit={this.handleSubmit}>
									<label htmlFor="inputFirstname">Prénom</label>
									<div className="form-label-group">
                                        <input type="text" id="inputFirstname" name="inputFirstname" className="form-control" placeholder="Prénom" required />
                                    </div>
									<label htmlFor="inputLastname">Nom</label>
									<div className="form-label-group">
                                        <input type="text" id="inputLastname" name="inputLastname" className="form-control" placeholder="Nom" required />
                                    </div>
									<label htmlFor="inputEmail">Email</label>
									<div className="form-label-group">
            							<input type="email" id="inputEmail" name="inputEmail" className="form-control" placeholder="Email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" required />
              						</div>
              						<hr />
									<label htmlFor="inputPassword">Mot de passe</label>
              						<div className="form-label-group">
                						<input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Mot de passe" pattern="^.{6,}$" required />
              						</div>
									<label htmlFor="inputConfirmPassword">Confirmation du mot de passe</label>
              						<div className="form-label-group">
                						<input type="password" id="inputConfirmPassword" name="inputConfirmPassword" className="form-control" placeholder="Mot de passe" pattern="^.{6,}$" required />
              						</div>
									<div className="custom-control custom-checkbox mb-3">
										<input type="checkbox" className="custom-control-input" id="isHandicap" />
										<label className="custom-control-label" htmlFor="isHandicap"><FaAccessibleIcon /></label>
									</div>
									<div className="custom-control custom-checkbox mb-3">
                						<input type="checkbox" className="custom-control-input" id="customCheck2" />
                						<label className="custom-control-label" htmlFor="customCheck2">J'accepte les <a href="/cgu">conditions génerales d'utilisations</a></label>
									</div>
									<div className="custom-control custom-checkbox mb-3">
										<input type="checkbox" className="custom-control-input" id="customCheck3" />
                						<label className="custom-control-label" htmlFor="customCheck3">S'inscrire à la newsletters</label>
              						</div>
              						<button className="btn btn-lg btn-secondary btn-block text-uppercase" type="submit">S'inscrire</button>
              						<a className="d-block text-center mt-2" href="/connexion">Se connecter</a>
            					</form>
          					</div>
        				</div>
      				</div>
    			</div>
				<NotificationContainer/>
  			</div>
		);
	}
}

if (document.getElementById('registerComponent')) {
	ReactDOM.render(<Register />, document.getElementById('registerComponent'));
}
