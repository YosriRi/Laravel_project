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
            const result = res.data.data;
            currentComponent.setState({
                activities: result
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    tryToAddIntoCart(event) {
        const currentComponent = this;
        const token = localStorage.getItem('userCookie');
        const id_activity = $(event.target).data('id');

        if (token !== undefined) {
            axios.get('/api/user?token=' + token)
            .then(function (res) {
                const result = res.data.user;
                currentComponent.addIntoCart(result, id_activity, token);
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            alert('Vous devez vous connecter pour ajouter au panier');
        }
    }

    addIntoCart(user, id, token) {
        axios.post('/api/carts', {
            id_user: user.id,
            id_activity: id,
            token: token
        })
        .then(function (res) {
            alert('Ajout réussi');
        })
        .catch(function (error) {
            alert('Problème lors de l\'ajout')
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
                                <a className="btn btn-primary" onClick={this.tryToAddIntoCart.bind(this)} data-id={activity.id}>Ajouter au panier</a>
                            </div>
                        </div>
                    </div>
                )}
          	</div>
		);
	}
}
