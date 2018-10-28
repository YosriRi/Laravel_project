import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import Reference from './Reference';

export default class Profile extends Component {
	constructor(props) {
		super(props);
        const token = localStorage.getItem('userToken');

        if (token === null) {
            window.location.replace("/");
        }
	}

	render() {
		return (
			<div>
				<ul className="nav nav-tabs" style={{float: 'right'}} role="tablist">
    				<li className="nav-item">
        				<a className="nav-link active" href="#profile" role="tab" data-toggle="tab">Profile</a>
    				</li>
    				<li className="nav-item">
        				<a className="nav-link" href="#images" role="tab" data-toggle="tab">Images</a>
    				</li>
    				<li className="nav-item">
        				<a className="nav-link" href="#references" role="tab" data-toggle="tab">Dernières activités</a>
    				</li>
				</ul>
					
				<section className= "profile">
    				<div className="col-12 tab-content">
        				<div role="tabpanel" className="tab-pane in active" id="profile">
            				<div className="profile-company-content">
            					<div className="col-md-12">
                					<div className="tab-content">
                    					<div className="profile-main">
                        					<h3>Biographie</h3>
                        					<div className="row profile-in">
                            					<div className="media-left col-xs-12">
                                    				<img src="/images/user.jpg" alt="" className="img-fluid media-object" />
                            					</div>
                            					<div className="media-body col-xs-12">
                                					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, maxime, excepturi, mollitia, voluptatibus similique aliquidautem laudantium sapiente ad enim ipsa modi labo rum accusantium deleniti neque architecto vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, nihil, dolores, culpa ullam vero ipsum placeat accusamus nemo itate id molestiae consectetur quae pariatur repudi andae vel ex quaerat nam iusto aliquid laborum quia adipisci aut ut imcati nisi deleniti tempore maxime sequi fugit reiciendis libero quo. Rerum, assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, at nemo inventore temporibus corporis suscipit.</p>
                            					</div>
                        					</div>
                    					</div>
                    					<div className="row">
                        					<div className="col-md-8">
                            					<div className="sidebar">
                                					<h5 className="main-title">Amis So'Extreme</h5>
													<div className="single_client_img">
                                						<img className="img-circle img-responsive" src="images/cl2.jpg" alt="" />
                            						</div>	
                          					</div>
                            					<div className="sidebar">
                                					<h5 className="main-title">Wishlist des activités</h5>
													<div>
														<div className="tableReservations">
															<thead>
																<tr>
																	<th>Nom</th>
																	<th>Date</th>
																	<th>Nombre de personne</th>
																	<th>Prix</th>
																	<th>Réservation</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Saut en parachute PAC</td>
																	<td>25-10-2018</td>
																	<td>1</td>
																	<td>1320 euros</td>
																	<td><a className="btn btn-primary btn-sm " href="">Réserver Maintenant</a></td>
																</tr>
																<tr>
																	<td>Soufflerie</td>
																	<td>30-03-2019</td>
																	<td>6</td>
																	<td>180 euros</td>
																	<td><a className="btn btn-primary btn-sm " href="">Réserver Maintenant</a></td>
																</tr>
																<tr>
																	<td>Canoe</td>
																	<td>12-06-2019</td>
																	<td>2</td>
																	<td>30 euros</td>
																	<td><a className="btn btn-primary btn-sm " href="">Réserver Maintenant</a></td>
																</tr>
																<tr>
																	<td>Canyoning</td>
																	<td>25-08-2019</td>
																	<td>3</td>
																	<td>60 euros</td>
																	<td><a className="btn btn-primary btn-sm " href="">Réserver Maintenant</a></td>
																</tr>
															</tbody>
														</div>
													</div>
                            					</div>
                        					</div>
                        					<div className="col-md-4">
                            					<div className="sidebar">
                                					<h5 className="main-title">Informations personnelles</h5>
                                					<div className="sidebar-information">
                                    					<ul className="single-category">
                                        					<li className="row">
                                            					<h6 className="title col-xs-6">Name</h6>
                                            					<span className="subtitle col-xs-6">Yosri Riani</span>
																<h6 className="title col-xs-6">sexe</h6>
																<span className="subtitle col-xs-6">Male</span>
																<h6 className="title col-xs-6">Addresse</h6>
																<span className="subtitle col-xs-6">Rue de la liberté</span>
																<h6 className="title col-xs-6">Code postal</h6>
																<span className="subtitle col-xs-6">75012</span>
																<h6 className="title col-xs-6">téléphone</h6>
																<span className="subtitle col-xs-6">06 84 75 65 24</span>
																<h6 className="title col-xs-6">Age</h6>
																<span className="subtitle col-xs-6">27</span>
																
																
																
																
																
                                        					</li>
                                    					</ul>
                                					</div>
                            					</div>
                        					</div>
                    					</div>
                					</div>
            					</div>
            				</div>
        				</div>
        				<Image />
        				<Reference />
        			</div>
    			</section>
			</div>
		);
	}
}

if (document.getElementById('profileComponent')) {
	ReactDOM.render(<Profile />, document.getElementById('profileComponent'));
}
