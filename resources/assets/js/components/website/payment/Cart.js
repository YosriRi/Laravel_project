import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';
import Popup from "reactjs-popup";

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
        const Modal =  () => (
            <Popup
              trigger={<button className="btn btn-primary btn-sm"> Offrir un cadeau </button>}
              modal
              closeOnDocumentClick
            >
      				<div className="col-sm-12 col-md-9 col-lg-7 mx-auto">
        				<div className="card my-5">
          					<div className="card-body">
            					<h5 className="card-title text-center">Cordonnées de la personne</h5>
							    <form className="form-Gift" onSubmit={this.handleSubmit}>
                                <label htmlFor="inputFirstnameGift">Prénom</label>
									<div className="form-label-group">
                                        <input type="text" id="inputFirstnameGift" name="inputFirstnameGift" className="form-control" placeholder="Prénom" required />
                                    </div>
									<label htmlFor="inputLastnameGift">Nom</label>
									<div className="form-label-group">
                                        <input type="text" id="inputLastnameGift" name="inputLastnameGift" className="form-control" placeholder="Nom" required />
                                    </div>
									<label htmlFor="inputEmail">Email</label>
									<div className="form-label-group">
            							<input type="email" id="inputEmailGift" name="inputEmailGift" className="form-control" placeholder="Email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" required />
              						</div>
          							<button className="btn btn-sm btn-secondary btn-block text-uppercase" type="submit">Enregistrer</button>
            					</form>
          					</div>
        				</div>
      				</div>
            </Popup>
          )
		return (
            
            <div className="col-md-12 order-md-1 mb-4">

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
                                <td><Modal /></td>
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