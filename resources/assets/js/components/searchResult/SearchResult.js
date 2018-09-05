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
			backgroundImage: "url('https://unsplash.it/1900/1080?image=1076')"
		}
		return (
			<div>
				<header className="py-5 bg-image-full" style={divStyle}></header>
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
