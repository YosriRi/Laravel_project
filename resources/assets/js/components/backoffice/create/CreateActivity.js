import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateActivity extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
                <Form>
        			<FormGroup>
          				<Label for="name">Nom</Label>
          				<Input type="text" name="name" id="name" placeholder="Nom de l'activité" />
        			</FormGroup>
					<FormGroup>
          				<Label for="description">Description</Label>
          				<Input type="textarea" name="description" id="description" placeholder="Description de l'activité" />
        			</FormGroup>
					<FormGroup>
          				<Label for="amount">Prix</Label>
          				<Input type="text" name="amount" id="amount" placeholder="Prix de l'activité" />
        			</FormGroup>
					<FormGroup>
						<Label for="image1">Image 1</Label>
          				<Input type="file" name="image1" id="image1" />
					</FormGroup>
					<FormGroup>
						<Label for="image2">Image 2</Label>
          				<Input type="file" name="image2" id="image2" />
					</FormGroup>
					<FormGroup>
						<Label for="image3">Image 3</Label>
          				<Input type="file" name="image3" id="image3" />
					</FormGroup>
					<FormGroup>
						<Label for="numberOfPersons">Nombre de personnes</Label>
						<Input type="select" name="numberOfPersons" id="numberOfPersons">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</Input>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="checkbox" />
							Handicapé
						</Label>
					</FormGroup>
					<Button color='info'>Créer</Button>
				</Form>
            </div>
		);
	}
}
