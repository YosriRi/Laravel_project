import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextTruncate from 'react-text-truncate';
export default class ListActivities extends Component {
	constructor(props) {
		super(props);

        // console.log(props.activities);

        this.state = {
            activities: props.activities
        };
	}

    // componentWillReceiveProps(activities) {
    //     console.log(activities);
    //     const currentComponent = this;
    //     currentComponent.setState({
    //         activities: activities.activities
    //     });
    // }

	render() {
		return (
            <div className="row">
                { this.state.activities.map(activity =>
                    <div key={activity.id} className="search-card col-lg-4 col-md-6">
                        <div className="card z-depth-1">
                            <div className="view overlay">
                                <img src={activity.image1_location} className="card-img-top" alt="narrower" />
                                <a href={'/detailActivity/' + activity.id}>
                                    <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                </a>
                            </div>
                            <div className=" card-body card-body-cascade">
                                <h5 className="card-title">{activity.name}</h5>
                                <h6>{activity.amount} €</h6>
                                <TextTruncate
                                    line={4}
                                    truncateText=" … "
                                    text={activity.description}
                                    textTruncateChild={<a className="btn btn-primary " href={'/detailActivity/' + activity.id}>Détail</a>}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
		);
	}
}
