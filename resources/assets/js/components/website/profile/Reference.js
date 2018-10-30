import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Reference extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div role="tabpanel" className="tab-pane fade" id="references">
				<div className="col-md-12">
					<div className="tab-content">
						<div className="profile-main">
							<h5 className="main-title">Dernières activités</h5>
							<div>
								<div className="tableReservations">
									<thead>
										<tr>
											<th>Nom</th>
											<th>Date</th>
											<th>Nombre de personne</th>
											<th>Photos</th>
											<th>Commentaires</th>
											<th>Avis</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Saut en parachute</td>
											<td>25-10-2018</td>
											<td>1</td>
											<td><a className="btn btn-primary btn-sm " href="">Gallerie</a></td>
											<td><a className="btn btn-primary btn-sm " href="">Commentaires</a></td>
											<td><a className="btn btn-primary btn-sm " href="">avis</a></td>
										</tr>
										<tr>
											<td>Rafting</td>
											<td>30-03-2019</td>
											<td>6</td>
											<td><a className="btn btn-primary btn-sm " href="">Gallerie</a></td>
											<td><a className="btn btn-primary btn-sm " href="">Commentaires</a></td>
											<td><a className="btn btn-primary btn-sm " href="">avis</a></td>
										</tr>
									</tbody>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
