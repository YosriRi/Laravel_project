import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row">
            	<div className="title-holder d-none-d-md-block">
                  	<h1 className="base-title">Saut en parachute d'initiation</h1>
                  	<div className="base-subtitle">
                    	<span className="sub-description">
                    		Vous êtes en quête de sensations fortes ? Un
                      		<strong>stage</strong> complet de
                      		<strong>parachutisme</strong>
                      		vous impressionne mais vous souhaitez aller au-delà d'un
                      		<strong>saut en parachute tandem</strong> ? Le
                      		<strong>saut d'initiation PAC</strong> (Progression Accompagnée en Chute) semble être la bonne alternative&nbsp;!
                      		Entouré de deux moniteurs, vous sautez de 4000 mètres d'altitude muni de votre propre parachute&nbsp;!
                      		Ce sentiment de plaisir intense est décuplé par la sensation de liberté et d'autonomie. Vous êtes guidé
                      		durant toute la durée de la chute libre par les moniteurs grâce à des gestes prédéfinis, l'un d'entre
                      		eux peut d'ailleurs vous filmer afin d'immortaliser ce moment intense et inoubliable, puis durant la
                      		chute sous voile, par radio. Alors n'hésitez plus&nbsp;! Osez un
                      		<strong>baptême de chute libre</strong> vous permettant de participer pleinement à votre saut. Adrénaline garantie&nbsp;!
                    	</span>
                    	<span className="subtitle">521 acitivities match your criteria</span>
                		<div className="sort-block">
                  			<span className="text">Sort By:</span>
              				<div className="ah-select">
                        		<select className="ais-SortBy__root">
                          			<option value="Proximite">Proximité</option>
                          			<option value="popularite">Popularité</option>
                          			<option value="prixdesc">Moins cher</option>
                          			<option value="prixasc">Plus cher</option>
                        		</select>
                      		</div>
                		</div>
                  	</div>
            	</div>
            	<div className="whiseparator"></div>
            </div>
		);
	}
}
