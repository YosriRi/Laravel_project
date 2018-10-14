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
                  	<h1 className="base-title">Toutes les activités <strong>So'Extreme</strong></h1>
                  	<div className="base-subtitle">
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
