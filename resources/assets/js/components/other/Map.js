import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Map extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="maps" className="maps">
    			<div className="home-overlay">
        			<div className="container-fluid">
            			<div className="row">
                			<div className="main_maps text-center">
                    			<div className="col-md-12">
                        			<div className="map_canvas_icon">
                            			<i className="fa fa-map-marker" onClick="showmap()"></i>
                        				<h2 type="button" value="Open map" onClick="showmap()">Open map</h2>
                        			</div>
                        			<div id="map_canvas"></div>
                    			</div>
                			</div>
            			</div>
        			</div>
    			</div>
			</section>
		);
	}
}