import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListActivities from './ListActivities';

export default class Result extends Component {
	constructor(props) {
		super(props);

        this.state = {
            activities: []
        };
	}

    componentDidMount() {
        let currentComponent = this;

        axios.get('/api/activities')
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
