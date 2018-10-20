import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Gallery extends Component {
	constructor(props) {
		super(props);
       
        this.state = {
            photos: props.photos
        };
    }
    

	render() {
		return (
            
        <div role="tabpanel" className="tab-pane fade " id="gallery">
                { this.state.photos.map(photo =>
            	<div key={photo.id} className="container gallery-container">
                	<div className="gallery-title">
                    	<h4>My Gallery</h4>
            		</div>
                	<hr />
                	<div className="tz-gallery">
                    	<div className="row">
                        	<div className="mb-4 col-lg-3 col-md-4">
                            	<div className="card z-depth-1">
                                	<div className="view">
                                		<a className="lightbox" href={photo.name} data-size="1600x1067">
                                    		<img src={photo.name} alt="placeholder" className="img-fluid " />
                                		</a>
                            		</div>
                                	<div className="card-title">
                                    	<strong>So'Extreme</strong>
                                	</div>
                                	<div className="card-body card-body-cascade">
                                    	<a className="robotolight" href="">
                                        	<i className="fa fa-eye"></i>552
                                    	</a>
                                		<a className="robotolight" href="">
                                        	<i className="far fa-comment-dots"></i>17
                                        </a>
                                	</div>
                                	<div className="card-footer">
                                    	<p>Note: </p>
                                    	<small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                	</div>
                            	</div>
                        	</div>
                        	
                	</div>
            	</div>
            </div>)}
        </div>
		);
	}
}
if (document.getElementById('galleryComponent')) {
    ReactDOM.render(<Gallery />, document.getElementById('galleryComponent'));
}