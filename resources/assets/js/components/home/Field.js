import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Field extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="terrain" className="terrain">
                <div className="container">
                    <div className="my-4 text-center">
                      	<h2>Nos Terrains de jeu</h2>
                        <div className="border_devider"></div>
                        <p>Faites le plein de sensations en famille ou entre amis grâce à une multitude d'activités.
                            Chute libre indoor, Saut en Parachute, Rafting, Kayak, Escalade, vous n'avez que l'embarras du choix :) </p>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_terrain">
                                <div className="single_terrain_img">
                                    <img src="images/ab1.jpg" alt="" />
                                </div>
                            	<div className="single_terrain_img_overlay all_overlay">
                                    <a href="">
                                        <h2>Air</h2>
                                    </a>
                                </div>
                            </div>
                            <h2>Air</h2>
                            <p>Il y a deux typologies de loisirs aériens sur So'Extreme : les baptêmes de l’air et les sauts. Si vous êtes en recherche de sensations extrêmes, la deuxième typologie de sports aériens est faite pour vous.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_terrain">
                                <div className="single_terrain_img">
                                    <img src="images/ab2.jpg" alt="" />
                                </div>
                                <div className="single_terrain_img_overlay all_overlay">
                                    <a href="">
                                        <h2>Eau</h2>
                                    </a>
                                </div>
                            </div>
                            <h2>Eau</h2>
                            <p>Si vous recherchez plutôt à naviguer, So'Extreme a exactement ce qu’il vous faut : 
                                Du stage de jet ski à la balade en bateau à moteur ou à voile en passant par le Canöe, Kayak et le Rafting.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_terrain">
                                <div className="single_terrain_img">
                                    <img src="images/ab3.jpg" alt="" />
                                </div>
                                <div className="single_terrain_img_overlay all_overlay">
                                    <a href="">
                                        <h2>Terre</h2>
                                    </a>
                                </div>
                            </div>
                            <h2>Terre</h2>
                    		<p>Pour tous vos moments en montagne, qu'il s'agisse de vacances ou de petits week-end, 
                                So'Extreme vous propose 15 activités de montagne à réserver ou offrir en bon cadeau. 
                                C'est l'occasion d'ajouter une touche d'insolite dans vos séjours hivernaux ! </p>
                        </div>
                    </div>
                </div>
			</section>
		);
	}
}
