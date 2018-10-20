import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

export default class Content extends Component {
	constructor(props) {
		super(props);
		const url = window.location.pathname;
		const id = url.substring(url.lastIndexOf('/') + 1);

		this.state = {
            id: id,
            activity: []
        };
	}

	componentDidMount() {
        let currentComponent = this;

        axios.get('/api/activities/' + this.state.id)
        .then(function (res) {
            const result = res.data.data;
            currentComponent.setState({
                activity: result
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

	render() {
		const activity = this.state.activity;
		const divStyle1 = {
			backgroundImage: 'url(' + activity.image1_location + ')',
			backgroundSize: 'cover',
			
		}
		const divStyle2 = {
			backgroundImage: 'url(' + activity.image2_location + ')',
			backgroundSize: 'cover'
		}
		const divStyle3 = {
			backgroundImage: 'url(' + activity.image3_location + ')',
			backgroundSize: 'cover',
			cursor: 'pointer'
		}
		return (
			<div className="col-lg-8">
				<h1 className="mt-4">{activity.name}</h1>
				<p className="lead">
					Catégorie :
					<a href="#">Air</a>
				</p>
				<hr />
				<div className="rating">
					<input type="radio" id="star5" name="rating" value="5" />
					<label className="full" htmlFor="star5" title="5 stars">
						<i className="far fa-star star-empty"></i><i className="fas fa-star star-checked"></i>
					</label>
					<input type="radio" id="star4" name="rating" value="4" />
					<label className="full" htmlFor="star4" title="4 stars">
						<i className="far fa-star star-empty"></i><i className="fas fa-star star-checked"></i>
					</label>
					<input type="radio" id="star3" name="rating" value="3" />
					<label className="full" htmlFor="star3" title="3 stars">
						<i className="far fa-star star-empty"></i><i className="fas fa-star star-checked"></i>
					</label>
					<input type="radio" id="star2" name="rating" value="2" />
					<label className="full" htmlFor="star2" title="2 stars">
						<i className="far fa-star star-empty"></i><i className="fas fa-star star-checked"></i>
					</label>
					<input type="radio" id="star1" name="rating" value="1" />
					<label className="full" htmlFor="star1" title="1 star">
						<i className="far fa-star star-empty"></i><i className="fas fa-star star-checked"></i>
					</label>
				</div>
				<hr />
				<div className="container-fluid">
					<div className="row">                  
						<div className="image-block-8 col-sm-8" style={divStyle1}>
						</div>
						<div className="col-sm-4">
							<div className="image-block" style={divStyle2}>
							</div>
							<div className="image-block" style={divStyle3}>
								<a className="img-post"href="/gallery"><p> Plus de photos </p></a>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="headingTwo">
							<h4 className="panel-title">
								<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									<i className="fa fa-map-signs"></i> Descriptions <i className="fa fa-chevron-down"></i>
								</a>
							</h4>
						</div>
						<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
							<div className="panel-body">
								{activity.description}
							</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="headingThree">
							<h4 className="panel-title">
								<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									<i className="fa fa-bullseye"></i> Infos pratiques <i className="fa fa-chevron-down"></i>
								</a>
							</h4>
						</div>
						<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
							<div className="panel-body">
							
							- Equipement à prévoir : Tenue et chaussures de sport basses recommandées (pas de crochet)

							<br/>- Certificat médical nécessaire : Certificat médical de non contre-indication à la pratique de l'activité
							<br/>- Age minimum : 15
							<br/>- Poids maximum : 95
							<br/>- Autorisation parentale (pour les mineurs) nécessaire
							<br/>- Activité soumise aux conditions météo
							<br/>ATTENTION : activité interdite aux personnes ayant des problèmes auditifs et portant des implants.</div>
						</div>
					</div>
				</div>
				<hr />
				<Comment/>
			</div>
		);
	}
}
