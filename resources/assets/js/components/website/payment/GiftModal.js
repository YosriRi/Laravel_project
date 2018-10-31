import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from "reactjs-popup";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class GiftModal extends Component {
	constructor(props) {
        super(props);
        const token = localStorage.getItem('userToken');
        const user = JSON.parse(localStorage.getItem('user'));
        const idActivity = props.idActivity;

        this.state = {
            token: token,
            user: user,
            idActivity: idActivity,
            message: '',
            email: ''
        };
    }
    
    handleSubmit(event) {
        event.preventDefault();

        axios.post('/api/gifts', {
            id_user: this.state.user.id,
            id_activity: this.state.idActivity,
            message: this.state.message,
            email: this.state.email,
            token: this.state.token
        })
        .then((res) => {
            NotificationManager.success('Message de succès', 'Envoie du cadeau réussi');
            location.reload();
        })
        .catch((error) => {
            NotificationManager.error('Message d\'erreur', 'Erreur lors de l\'envoie du cadeau');
        });
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onChangeMessage(event) {
        this.setState({
            message: event.target.value
        })
    }
    
	render() {
		return (
            <div>
                <Popup trigger={<button className="btn btn-primary btn-sm"> Offrir un cadeau </button>} modal closeOnDocumentClick>
                    <div className="col-sm-12 col-md-9 col-lg-7 mx-auto">
                        <div className="card my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Cordonnées de la personne</h5>
                                <form className="form-Gift" onSubmit={this.handleSubmit.bind(this)}>
                                    <label htmlFor="inputMessageGift">Message</label>
                                    <div className="form-label-group">
                                        <textarea type="text" id="inputMessageGift" name="inputMessageGift" className="form-control" placeholder="Message" required onChange={this.onChangeMessage.bind(this)} />
                                    </div>
                                    <label htmlFor="inputEmail">Email</label>
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmailGift" name="inputEmailGift" className="form-control" placeholder="Email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" required onChange={this.onChangeEmail.bind(this)} />
                                    </div>
                                    <button className="btn btn-sm btn-secondary btn-block text-uppercase" type="submit">Enregistrer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Popup>
                <NotificationContainer/>
			</div>
		);
	}
}