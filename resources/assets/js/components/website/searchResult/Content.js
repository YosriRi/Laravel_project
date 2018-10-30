import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activities: props.activities
			
		};
		console.log(props);
	}
	
	render() {
		return (
			<div className="row">
				<div className="title-holder d-none-d-md-block">
                  	<h1 className="base-title">Toutes les activités <strong>So'Extreme</strong></h1>
                  	<div className="base-subtitle">
                    	<span className="subtitle"> 9 Activités ont été trouvés</span>
                		<div className="sort-block">
                  			<span className="text">Trier par:</span>
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
