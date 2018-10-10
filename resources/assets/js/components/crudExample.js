import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class CrudExample extends Component {
    constructor() {
        super();
        this.state = {
            activities: []
        };

        // this.componentDidMount = this.componentDidMount.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
        const target = event.target;

        // const activity = {
        //     name: target.name.value,
        //     type: target.type.value,
        //     duration: target.duration.value,
        //     description: target.description.value,
        //     date_of_activity: '2018-01-01 20:00:00'
        // };

        axios.post('/api/activities', {
            name: target.name.value,
            type: target.type.value,
            duration: target.duration.value,
            description: target.description.value,
            date_of_activity: '2018-01-01 20:00:00'
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleDelete(event) {
        event.preventDefault();

        console.log(event.target.id.value);
        axios.delete('/api/activities/'+event.target.id.value)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <ul>
                    { this.state.activities.map(activity => <li key={activity.id}>{activity.name} - {activity.id}</li>) }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Type:
                        <input type="text" name="type" />
                    </label>
                    <label>
                        Duration:
                        <input type="text" name="duration" />
                    </label>
                    <label>
                        description:
                        <input type="text" name="description" />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <form onSubmit={this.handleDelete}>
                    <label>
                        ID:
                        <input type="text" name="id" />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    }
}

if (document.getElementById('crudExample')) {
    ReactDOM.render(<CrudExample />, document.getElementById('crudExample'));
}
