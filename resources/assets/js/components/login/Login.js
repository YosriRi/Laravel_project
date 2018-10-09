import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';

export default class Login extends Component {
	constructor(props) {
		super(props);
	}

    handleSubmit(event) {
        event.preventDefault();
        const cookies = new Cookies();
        const target = event.target;

        const email             = target.inputEmailLogin.value;
        const password          = target.inputPasswordLogin.value;

        axios.post('/api/login', {
            email: email,
            password: password
        })
        .then(res => {
            cookies.set('userCookie', res.data.token, { path: '/', maxAge: 10800 });
            alert("Connexion réussi");
            window.location.replace("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            alert('Problème de connexion');
        });
    }

	render() {
		return (
			<div className="container">
    			<div className="row">
      				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        				<div className="card card-signin my-5">
          					<div className="card-body">
            					<h5 className="card-title text-center">Sign In</h5>
							    <form className="form-signin" onSubmit={this.handleSubmit}>
              						<div className="form-label-group">
                						<input type="email" id="inputEmailLogin" className="form-control" placeholder="Email" required autoFocus />
                						<label htmlFor="inputEmailLogin">Email</label>
              						</div>
              						<div className="form-label-group">
                						<input type="password" id="inputPasswordLogin" className="form-control" placeholder="Mot de passe" required />
                						<label htmlFor="inputPasswordLogin">Mot de passe</label>
              						</div>
              						<div className="custom-control custom-checkbox mb-3">
                						<input type="checkbox" className="custom-control-input" id="customCheck1" />
                						<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
              						</div>
          							<button className="btn btn-lg btn-secondary btn-block text-uppercase" type="submit">Se connecter</button>
            					</form>
          					</div>
        				</div>
      				</div>
    			</div>
			</div>
		);
	}
}

if (document.getElementById('loginComponent')) {
	ReactDOM.render(<Login />, document.getElementById('loginComponent'));
}
