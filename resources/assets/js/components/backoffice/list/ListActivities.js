import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Alert } from 'reactstrap';
import moment, { relativeTimeThreshold } from 'moment';
import ShowAlert from '../ShowAlert';
import { FaAccessibleIcon } from 'react-icons/fa';

export default class ListActivities extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            activities: [],
            alert: false,
            msg: '',
            color: ''
        };
    }

    deleteActivity(event) {
        const boolean = confirm("Etes-vous sûr de vouloir supprimer l'activité ?");
        if (boolean === true) {
            axios.delete('/api/activities/' + event.target.id)
            .then((res) => {
                this.setState({
                    alert: true,
                    msg: 'Suppression réussi',
                    color: 'success'
                });
                this.getActivities();
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    getActivities() {
        axios.get('/api/activities')
        .then((res) => {
            let result = res.data.data;
            this.setState({
                activities: result
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    componentDidMount() {
        this.getActivities();
    }

	render() {
        let showAlert;
        if (this.state.alert === true) {
            showAlert = <ShowAlert text={this.state.msg} />;
        }
		return (
			<div>
                {showAlert}
                <Table hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Prix</th>
                            <th>Image 1</th>
                            <th>Image 2</th>
                            <th>Image 3</th>
                            <th>Début</th>
                            <th>Fin</th>
                            <th>Nombre de personnes</th>
                            <th>Handicapé</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.activities.map(activity =>
                            <tr key={activity.id}>
                                <td>{activity.id}</td>
                                <td>{activity.name}</td>
                                <td>{activity.description.substr(0, 50)}...</td>
                                <td>{activity.amount}€</td>
                                <td>{activity.image1_location}</td>
                                <td>{activity.image2_location}</td>
                                <td>{activity.image3_location}</td>
                                <td>{moment(activity.start).format("DD/MM/YYYY HH:mm")}</td>
                                <td>{moment(activity.end).format("DD/MM/YYYY HH:mm")}</td>
                                <td>{activity.number_of_persons}</td>
                                <td>{activity.handicap ? ( <FaAccessibleIcon /> ) : ( '' )}</td>
                                <td>
                                    <Button color="info">Détail</Button>
                                    <Button color="danger" id={activity.id} onClick={this.deleteActivity.bind(this)}>Supprimer</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
		);
	}
}
