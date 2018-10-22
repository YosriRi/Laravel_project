import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Description extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="soufflerie" className="soufflerie">
    			<div className="container">
                    <div className="head_title text-center">
                        <h4 className="subtitle">Nouveauté</h4>
                        <h2>Soufflerie</h2>
                        <div className="border_devider"></div>
                        <p>
						A la recherche de l'activité à sensation du moment? Vous avez tapé à la bonne porte, 
						avec ce nouveau simulateur de chute libre à Gorge du Verdon.
						<br/>Accessible à partir de 5 ans, cette activité insolite 
						vous permettra de découvrir les joies de la chute libre en famille ou entre amis!
                        </p>
                    </div>
    				<div className="row">
                		<div className="col">
                    		<div className="single_soufflerie">
                        		<div className="single_soufflerie_img">
                            		<img src="images/soufflerie.jpg" alt="Soufflerie" />
                        		</div>
                    		</div>
	                	</div>
                		<div className="col">
                    		<div className="single_soufflerie">
                        		<div className="single_soufflerie_acording">
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
												Adapté d'un concept Russe, optimisé pour rendre accessible la chute libre à tous et partout, 
												cette soufflerie vous permettra de vous initier à cette nouvelle activité dans les meilleures conditions. 
												Ces simulateurs de chute libre ont été créés à l’origine par l’aérospatiale pour l’entrainement des troupes armées.
                                        		</div>
                                    		</div>
                                		</div>
                                		<div className="panel panel-default">
                                    		<div className="panel-heading" role="tab" id="headingThree">
                                        		<h4 className="panel-title">
                                        			<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                		<i className="fa fa-bullseye"></i> Equipements <i className="fa fa-chevron-down"></i>
                                            		</a>
                                        		</h4>
                                    		</div>
                                    		<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        		<div className="panel-body">
													 - Equipement à prévoir : Tenue de sport et baskets
												<br/>- Age minimum : 5
												<br/>- Ville la plus proche : La Palud-sur-Verdon (34 km) , Trigance (22 km)
												<br/>- Merci de prévoir 2h sur place 
                                        		</div>
                                    		</div>
                                		</div>
										<div className="panel panel-default">
                                    		<div className="panel-heading" role="tab" id="headingOne">
                                        		<h4 className="panel-title">
                                        			<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                		<i className="fa fa-info"></i> Infos Pratiques <i className="fa fa-chevron-down"></i>
                                        			</a>
                                        		</h4>
                                    		</div>
                                    		<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    			<div className="panel-body">

												ATTENTION :  
												<br/>- Pour les personnes ayant des problèmes auditifs et portant des implants, veuillez consulter votre médecin.
												<br/>- Être en bonne santé physique et mental au moment du vol
												<br/>- Ne pas être enceinte au moment du vol
												<br/>- Ne pas avoir eu de luxation de l’épaule récemment sinon avoir consulté un médecin 
													et fournir un certificat médical de non contre-indication à la pratique de la chute libre en soufflerie
												<br/>- Ne pas souffrir de problèmes de dos sinon avoir consulté un médecin et fournir un certificat médical 
													de non contre-indication à la pratique de la chute libre en soufflerie
												<br/>- Ne pas avoir bu d’alcool, ou être sous l’emprise de stupéfiant au moment du vol.

                                        		</div>
                                    		</div>
                                		</div>
									</div>
                        		</div>
                			</div>
            			</div>
        			</div>
    			</div>
			</section>
			
		);
	}
}
