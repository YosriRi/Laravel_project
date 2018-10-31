import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class Activity extends Component {
	constructor(props) {
        super(props);
        const token = localStorage.getItem('userToken');
        const user = JSON.parse(localStorage.getItem('user'));
        const url = window.location.pathname;
		const idActivity = url.substring(url.lastIndexOf('/') + 1);

        if (token === null) {
            window.location.replace("/");
        }

        this.state = {
            token: token,
            user: user,
            comment: '',
            idActivity: idActivity
        }
    }

    handleChangeComment(event) {
        this.setState({comment: event.target.value});
    }
    
    addComment() {
        axios.post('/api/comments', {
            id_user: this.state.user.id,
            id_activity: this.state.idActivity,
            comment: this.state.comment,
            token: this.state.token
        })
        .then((res) => {
            NotificationManager.success('Message de succès', 'Ajout réussi');
            location.reload();
        })
        .catch(function (error) {
            NotificationManager.error('Message d\'erreur', 'Erreur lors de l\'ajout du commentaire');
        });
    }

	render() {
		return (
			<div>
                <h5 className="card-header">Laisser un Commentaire:</h5>
                <div className="card-body">
                    <FormGroup>
                        <Input type="textarea" name="text" id="exampleText" onChange={this.handleChangeComment.bind(this)} />
                    </FormGroup>
                    <Button color="success" onClick={this.addComment.bind(this)}>Valider</Button>
                </div>
                <NotificationContainer/>
            </div>
		);
	}
}
