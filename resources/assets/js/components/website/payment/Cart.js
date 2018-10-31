import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';
import GiftModal from './GiftModal';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class Cart extends Component {
	constructor(props) {
        super(props);
        const token = localStorage.getItem('userToken');
        const user = JSON.parse(localStorage.getItem('user'));

        if (token === null) {
            window.location.replace("/");
        }

        this.state = {
            token: token,
            user: user,
            carts: [],
            total: ''
        }

        axios.get('/api/carts?id_user=' + user.id + '&token=' + token)
        .then((res) => {
            const result = res.data.data;
            let total = 0;
            result.forEach((element) => {
                total = parseInt(total) + parseInt(element.activity.amount);
            });
            this.setState({
                carts: result,
                total: total
            });
            localStorage.setItem('totalCart', total);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    deleteCart(event) {
        axios.delete('/api/carts/' + event.target.id + '?token=' + this.state.token)
        .then((res) => {
            NotificationManager.success('Message de succès', 'Suppression réussi');
            location.reload();
        })
        .catch(function (error) {
            NotificationManager.error('Message d\'erreur', 'Erreur lors de la suppression');
        });

    
    }
    
	render() {
		return (
            <div className="container">
				<div className="row">
                    <div className=" col-md-9 order-md-1 mb-4 center">
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Offrir un cadeau</th>
                                    <th>Date</th>
                                    <th>Nombre de personne</th>
                                    <th>Prix</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.carts.map(cart =>
                                    <tr key={cart.id}>
                                        <td>{cart.activity.name}</td>
                                        <td><GiftModal idActivity={cart.activity.id}/></td>
                                        <td>{cart.date}</td>
                                        <td>{cart.number_of_person}</td>
                                        <td>{cart.activity.amount}€</td>
                                        <td><Button color="danger" id={cart.id} onClick={this.deleteCart.bind(this)}>Supprimer</Button></td>
                                    </tr>
                                )}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <th>Total HT</th>
                                    <td>{(this.state.total/1.2).toFixed(2)}€</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <th>Total TTC</th>
                                    <td>{this.state.total}€</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <NotificationContainer/>
            </div>
		);
	}
}