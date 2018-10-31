import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
		const token = localStorage.getItem('userToken');
        let reservationButton;
        if (token !== null) {
            reservationButton = <Reservation />;
        } else {
			reservationButton = 'Pour réserver, veuillez vous connecter';
		}
        return (
            <div className="col-md-4">
    			<div className="card my-4">
      				<h5 className="card-header">Rechercher</h5>
      				<div className="card-body">
        				<div className="input-group">
          					<input type="text" className="form-control" placeholder="Search for..." />
          					<span className="input-group-btn">
        						<button className="btn btn-secondary" type="button">Go!</button>
          					</span>
        				</div>
      				</div>
    			</div>
    			<div className="card my-4">
      				<h5 className="card-header">Catégories</h5>
  					<div className="card-body">
        				<div className="row">
          					<div className="col-lg-6">
            					<ul className="list-unstyled mb-0">
              						<li>
                						<a href="#">Aériens</a>
              						</li>
          							<li>
                						<a href="#">Aquatiques</a>
              						</li>
              						<li>
                						<a href="#">Urbain</a>
              						</li>
            					</ul>
          					</div>
          					<div className="col-lg-6">
            					<ul className="list-unstyled mb-0">
              						<li>
                						<a href="#">Sauts</a>
              						</li>
              						<li>
                						<a href="#">Plongées</a>
              						</li>
              						<li>
                						<a href="#">Montagne</a>
              						</li>
					            </ul>
          					</div>
        				</div>
      				</div>
    			</div>
				<div className="card my-4">
					<h5 className="card-header">Réservation</h5>
				    <div className="card-body">
						{reservationButton}
			        </div>
				</div>
			</div>
        );
    }
}
