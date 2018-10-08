import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
            console.log(res, 'res');
            const result = res.data.data;
            console.log(result, 'result');
            currentComponent.setState({
                activities: result
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

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
                                <a className="btn btn-primary">Ajouter au panier</a>
                            </div>
                        </div>
                    </div>
                )}
          	</div>
		);
	}
}
