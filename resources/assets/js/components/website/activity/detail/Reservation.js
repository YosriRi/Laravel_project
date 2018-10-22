import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Calendar from 'react-calendar';
// var DateTimeField = require('react-bootstrap-datetimepicker');

export default class Reservation extends Component {
	constructor(props) {
		super(props);
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);

        this.state = {
            modal: false,
            date: '',
            numberOfPerson: 1,
            time: 5,
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
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const day = date.getDate();
        const dateFormated = year+'-'+month+'-'+day;
        this.setState({
            date: dateFormated
        });
    }

    onChangeNumber(event) {
        // const currentComponent = this;
        this.setState({
            numberOfPerson: event.target.value
        });
    }

    onChangeTime(event) {
        // const currentComponent = this;
        this.setState({
            time: event.target.value
        });
    }

    addIntoCart() {
        // console.log(this.state);
        const currentComponent = this;
        axios.post('/api/carts', {
            id_user: this.state.user.id,
            id_activity: this.state.id,
            date: this.state.date,
            hour: this.state.time,
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
        let arrayHour = [];
        for (let i = 1; i <= 30; i++) {
            arrayNumberOfPerson.push(i);
        }
        for (let j = 5; j <= 18; j++) {
            arrayHour.push(j);
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
                            <Label for="time">Heure</Label>
                            <Input type="select" name="select" id="time" onChange={this.onChangeTime.bind(this)}>
                                { arrayHour.map(j =>
                                    <option key={j}>{j}</option>
                                )}
                            </Input>
                        </FormGroup>
                        {/* <DateTimeField /> */}
                        <Calendar onChange={this.onChangeCalendar.bind(this)} />
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
