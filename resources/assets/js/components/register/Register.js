import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends Component {
	constructor(props) {
		super(props);
        this.state = {
            activity: []
        }
	}

    handleSubmit(event) {
        event.preventDefault();
        const target = event.target;

        const firstname         = target.inputFirstname.value;
        const lastname          = target.inputLastname.value;
        const email             = target.inputEmail.value;
        const password          = target.inputPassword.value;
        const confirmPassword   = target.inputConfirmPassword.value;

        if (password === confirmPassword) {
            axios.post('/api/register', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
            .then(res => {
                console.log(res, 'res');
                console.log(res.data, 'res.data');
            })
            .catch(function (error) {
                console.log(error, 'error');
            });
        } else {
            alert("Mot de passe différent");
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
                                    <div className="form-label-group">
                                        <input type="text" id="inputFirstname" name="inputFirstname" className="form-control" placeholder="Prénom" required />
                                        <label htmlFor="inputFirstname">Prénom</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="inputLastname" name="inputLastname" className="form-control" placeholder="Nom" required />
                                        <label htmlFor="inputLastname">Nom</label>
                                    </div>
              						<div className="form-label-group">
            							<input type="email" id="inputEmail" name="inputEmail" className="form-control" placeholder="Email" required />
                						<label htmlFor="inputEmail">Email</label>
              						</div>
              						<hr />
              						<div className="form-label-group">
                						<input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Mot de passe" required />
                						<label htmlFor="inputPassword">Mot de passe</label>
              						</div>
              						<div className="form-label-group">
                						<input type="password" id="inputConfirmPassword" name="inputConfirmPassword" className="form-control" placeholder="Mot de passe" required />
                						<label htmlFor="inputConfirmPassword">Confirmation du mot de passe</label>
              						</div>
              						<button className="btn btn-lg btn-secondary btn-block text-uppercase" type="submit">S'inscrire</button>
              						<a className="d-block text-center mt-2 small" href="/login">Se connecter</a>
            					</form>
          					</div>
        				</div>
      				</div>
    			</div>
  			</div>
		);
	}
}

if (document.getElementById('registerComponent')) {
	ReactDOM.render(<Register />, document.getElementById('registerComponent'));
}
