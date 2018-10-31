import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListActivities from './ListActivities';

export default class Result extends Component {
	constructor(props) {
        super(props);
        const urlString = window.location.href;
        var url = new URL(urlString);
        var id = url.searchParams.get("id_categorie");

        this.state = {
            activities: [],
            id_categorie: id
        };
	}

    componentDidMount() {
        let currentComponent = this;
        let url;
        if (this.state.id_categorie !== null) {
            url = '/api/activities?id_category=' + this.state.id_categorie;
        } else {
            url = '/api/activities';
        }

        axios.get(url)
        .then(function (res) {
            const result = res.data.data;
            currentComponent.setState({
                activities: result
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

	render() {
        const activities = this.state.activities;
        let listActivities;
        if (activities.length > 0) {
            listActivities = <ListActivities activities={activities} />
        } else {
            listActivities = "Aucun activité à afficher";
        }

		return (
			<div>
                {listActivities}
          	</div>
		);
	}
}
