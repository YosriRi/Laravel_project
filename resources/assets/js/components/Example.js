import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor(props) {
        super(props);
        //Initialize the state in the constructor
        this.state = {
            activities: [],
        };

        axios.get('/api/activities')
        .then(function (response) {
        // handle success
        // console.log(response.data.data, 'data');
        console.log(this.state, 'state');
        this.state.activities.push(response.data.data);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
    }

    componentDidMount() {
    }

    renderActivities() {
        // return this.state.activities.map(activity => {
        //     return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                // <li key={activity.id}>
                //     { activity.name } 
                // </li>      
        //     );
        // })
        // console.log(this.state);
        // console.log(this.state.activities.data, 'data');
        // console.log(this.state.activities.data.count, 'count');
        const array = [];
        console.log(this.activities, 'activities');
        // for (let i = 0; i < this.state.activities.data.count; i++) {
            // console.log(this.state.activities[i], i);
            // array.push(
            //     <li key='this.state.activities[i]'>
            //         {this.state.activities[i].name}
            //     </li>
            // );
        // }
        return array;
    }

    render() {
        return (
            <div>
                <ul>
                    { this.renderActivities() }
                </ul> 
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
