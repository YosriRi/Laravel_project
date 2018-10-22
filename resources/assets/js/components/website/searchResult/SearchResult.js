import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Slider from './Slider';
import Content from './Content';
import Result from './Result';

export default class SearchResult extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const divStyle = {
			backgroundImage: "url(images/bgcover.jpg)"
		}
		return (
			<div>
				<header className="py-5 bg-image-full" style={divStyle}>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<img src="/images/logo.png" className="activityimg" width="250" height="50" alt="So Extreme" />
									{/* <h4 class="slideHeader">Réservation des activités extrêmes</h4> */}
								</div>
							</div>
						</div>
				</header>
				<section className="search-result">
    				<div className="container">
      					<div className="row">
      						<Sidebar />
      						<div className="col-lg-9 col-sm-12">
      							<Slider />
      							<div className="container">
      								<Content />
      								<Result />
      							</div>
      						</div>
      					</div>
  					</div>
				</section>
			</div>
		);
	}
}

if (document.getElementById('searchResultComponent')) {
	ReactDOM.render(<SearchResult />, document.getElementById('searchResultComponent'));
}
