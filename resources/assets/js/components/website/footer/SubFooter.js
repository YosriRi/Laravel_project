import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubFooter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="page-footer font-small mdb-color pt-4">
        		<div className="container text-center text-md-left">
        			<div className="row text-center text-md-left mt-3 pb-3">
                		<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    		<h6 className="text-uppercase mb-4 font-weight-bold">So'Extreme</h6>
                    		<p>centrale de réservation d’activités de loisirs.
								<br/>selon votre recherche : vous pouvez soit réserver directement 
								l’activité de votre choix soit offrir un bon cadeau à un proche 
							</p>
                		</div>
                		<hr className="w-100 clearfix d-md-none" />
                		<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    		<h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                    		<p>
                        		<a href="#!">Comment ça marche ?</a>
                    		</p>
                    		<p>
                        		<a href="#!">Nos engagements</a>
                    		</p>
                    		<p>
                        		<a href="#!">Espace entreprises</a>
                    		</p>
                    		<p>
                        		<a href="#!">Charte de confidentialité</a>
                    		</p>
                		</div>
                		<hr className="w-100 clearfix d-md-none" />
                		<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    		<h6 className="text-uppercase mb-4 font-weight-bold">Liens utiles</h6>
                    		<p>
                        		<a href="#!">Mon Compte</a>
                    		</p>
                    		<p>
                        		<a href="#!">Qui sommes-nous ?</a>
                    		</p>
                    		<p>
                        		<a href="#!">Blog So'Extreme</a>
                    		</p>
                    		<p>
                        		<a href="#!">Aide</a>
                    		</p>
							<p>
                        		<a href="/cgu">CGU</a>
                    		</p>
                		</div>
                		<hr className="w-100 clearfix d-md-none" />
                		<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    		<h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    		<p>
                    			<i className="fas fa-home mr-3"></i> Gorge Du Verdon, PA 04500, FR
                			</p>
                    		<p>
                        		<i className="fas fa-envelope mr-3"></i> contact@soextreme.com
                    		</p>
                    		<p>
                        		<i className="fas fa-phone mr-3"></i> +33 1 23 45 67 88
                    		</p>
                			<p>
                        		<i className="fas fa-print mr-3"></i> +33 1 23 45 67 89
                    		</p>
                		</div>
            		</div>
            		<hr />
            		<div className="row d-flex align-items-center">
                		<div className="col-md-7 col-lg-8">
                    		<p className="text-center text-md-left">© 2018 Copyright: Furious-Ducks</p>
                		</div>
                		<div className="col-md-5 col-lg-4 ml-lg-0">
                    		<div className="text-center text-md-right">
                        		<ul className="list-unstyled list-inline">
                            		<li className="list-inline-item">
                                		<a className=" btn-sm mx-1">
                                    		<i className="fab fa-facebook-f"></i>
                                		</a>
                            		</li>
                            		<li className="list-inline-item">
                                		<a className=" btn-sm mx-1">
                                    		<i className="fab fa-twitter"></i>
                                		</a>
                            		</li>
                            		<li className="list-inline-item">
                                		<a className=" btn-sm mx-1">
                                    		<i className="fab fa-google-plus"></i>
                            			</a>
                            		</li>
                            		<li className="list-inline-item">
                                		<a className=" btn-sm mx-1">
                                    		<i className="fab fa-linkedin"></i>
                                		</a>
                            		</li>
                        		</ul>
                    		</div>
                		</div>
            		</div>
        		</div>
    		</footer>
		);
	}
}
