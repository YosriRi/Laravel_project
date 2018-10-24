import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';

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
            carts: []
        }

        axios.get('/api/carts?id_user=' + user.id + '&token=' + token)
        .then((res) => {
            const result = res.data.data;
            // console.log(result);
            this.setState({
                carts: result
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    deleteCart(event) {
        console.log(event.target.id);
        axios.delete('/api/carts/' + event.target.id + '?token=' + this.state.token)
        .then((res) => {
            alert('Suppression réussi');
            location.reload();
        })
        .catch(function (error) {
            alert('Erreur lors de la suppression');
        });
    }
    
	render() {
		return (
            <div className="col-md-12 order-md-1 mb-4">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
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
                                <td>{cart.activity.description}</td>
                                <td>{cart.date}</td>
                                <td>{cart.number_of_person}</td>
                                <td>{cart.activity.amount}</td>
                                <td><Button color="danger" id={cart.id} onClick={this.deleteCart.bind(this)}>Supprimer</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
		);
	}
}