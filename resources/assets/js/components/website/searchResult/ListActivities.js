import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ListActivities extends Component {
	constructor(props) {
		super(props);

        // console.log(props);

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
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" className="card-img-top" alt="narrower" />
                                <a href={'/detailActivity/' + activity.id}>
                                    <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                </a>
                            </div>
                            <div className=" card-body card-body-cascade">
                                <h5 className="card-title">{activity.name}</h5>
                                <p className="card-text">{activity.description}</p>
                                <a className="btn btn-primary" href={'/detailActivity/' + activity.id}>Détail</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
		);
	}
}
