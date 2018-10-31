import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class Login extends Component {
	constructor(props) {
		super(props);
	}

    handleSubmit(event) {
		event.preventDefault();
		const currentComponent = this;
        const target = event.target;

        const email             = target.inputEmailLogin.value;
        const password          = target.inputPasswordLogin.value;

        axios.post('/api/login', {
            email: email,
            password: password
        })
        .then(res => {
			localStorage.setItem('userToken', res.data.token);
			NotificationManager.success('Message de succès', 'Connexion réussi');
            window.location.replace("/");
        })
        .catch(function (error) {
			NotificationManager.error('Message d\'erreur', 'L\'utilisateur n\'existe pas');
        });
	}

	render() {
		return (
			<div className="container">
    			<div className="row">
      				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        				<div className="card card-signin my-5">
          					<div className="card-body">
            					<h5 className="card-title text-center">Se connecter</h5>
							    <form className="form-signin" onSubmit={this.handleSubmit}>
									<label htmlFor="inputEmailLogin">Email</label>
									<div className="form-label-group">
										<input type="email" id="inputEmailLogin" className="form-control" placeholder="Email" required autoFocus />
              						</div>
									<label htmlFor="inputPasswordLogin">Mot de passe</label>
              						<div className="form-label-group">
                						<input type="password" id="inputPasswordLogin" className="form-control" placeholder="Mot de passe" required />
              						</div>
              						<div className="custom-control custom-checkbox mb-3">
                						<input type="checkbox" className="custom-control-input" id="customCheck1" />
                						<label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
              						</div>
          							<button className="btn btn-lg btn-secondary btn-block text-uppercase" type="submit">Se connecter</button>
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

if (document.getElementById('loginComponent')) {
	ReactDOM.render(<Login />, document.getElementById('loginComponent'));
}
