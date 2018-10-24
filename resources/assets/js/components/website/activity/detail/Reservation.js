import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
moment.locale('fr');

export default class Reservation extends Component {
	constructor(props) {
		super(props);
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);

        this.state = {
            modal: false,
            date: moment(),
            numberOfPerson: 1,
            id: id,
            token: localStorage.getItem('userToken'),
            user: JSON.parse(localStorage.getItem('user'))
        };

        this.toggle = this.toggle.bind(this);
	}

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChangeCalendar(date) {
        this.setState({
            date: date
        });
    }

    onChangeNumber(event) {
        // const currentComponent = this;
        this.setState({
            numberOfPerson: event.target.value
        });
    }

    addIntoCart() {
        // console.log(this.state);
        const currentComponent = this;
        axios.post('/api/carts', {
            id_user: this.state.user.id,
            id_activity: this.state.id,
            date: this.state.date.format("YYYY-MM-DD HH:mm"),
            number_of_person: this.state.numberOfPerson,
            token: this.state.token
        })
        .then(function (res) {
            alert('Ajout réussi');
            currentComponent.toggle();
        })
        .catch(function (error) {
            alert('Problème lors de l\'ajout')
        });
    }

	render() {
        let arrayNumberOfPerson = [];
        for (let i = 1; i <= 10; i++) {
            arrayNumberOfPerson.push(i);
        }
		return (
            <div>
    			<Button color="danger" onClick={this.toggle}>Réserver</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Réservez votre activité</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="numberOfPerson">Nombre de personne</Label>
                            <Input type="select" name="select" id="numberOfPerson" onChange={this.onChangeNumber.bind(this)}>
                                { arrayNumberOfPerson.map(i =>
                                    <option key={i}>{i}</option>
                                )}
                            </Input>
                        </FormGroup>
                        <DatePicker
                            todayButton={"Aujourd'hui"}
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeCalendar.bind(this)}
                            showTimeSelect
                            minTime={moment().hours(9).minutes(0)}
                            maxTime={moment().hours(19).minutes(0)}
                            dateFormat="LLL"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addIntoCart.bind(this)}>Ajouter au panier</Button>
                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                    </ModalFooter>
                </Modal>
            </div>
		);
	}
}
