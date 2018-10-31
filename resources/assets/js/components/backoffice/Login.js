import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
var randtoken = require('rand-token');
import ShowAlert from './ShowAlert';

export default class Login extends Component {
	constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            showAlert: false,
            msg: '',
            color: ''
        };
    }
    
    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/api/loginAdmin', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            res = res.data.data[0];
            if (res !== undefined) {
                localStorage.setItem('adminToken', randtoken.generate(16));
                localStorage.setItem('admin', JSON.stringify(res));
                window.location.replace("/backoffice");
            } else {
                this.setState({
                    showAlert: true,
                    msg: "L'utilisateur n'existe pas",
                    color: 'danger'
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

	render() {
        let showAlert;
        if (this.state.showAlert) {
            showAlert = <ShowAlert text={this.state.msg} color={this.state.color} />
        }
		return (
			<div>
                {showAlert}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Connexion</h5>
                                    <Form onSubmit={this.handleSubmit.bind(this)}>
                                        <FormGroup>
                                            <Input type="email" name="email" id="email" placeholder="Votre email" required onChange={this.onChangeEmail.bind(this)} />    
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" name="password" id="password" placeholder="Votre mot de passe" required onChange={this.onChangePassword.bind(this)} />
                                        </FormGroup>
                                        <Button color="primary">Se connecter</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

if (document.getElementById('login')) {
	ReactDOM.render(<Login />, document.getElementById('login'));
}
