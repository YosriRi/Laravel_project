import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class VisualizePhoto extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const divStyle = {
			backgroundImage: 'url(images/parachute1.JPG)',
			backgroundSize: 'cover'
		}
		return (
			<div className="container">
    			<div className="row">
        			<div className="img-display" style={divStyle}></div>
      				<div className="comment-form">
	        			<h5 className="card-header">Leave a Comment:</h5>
	    				<div className="card-body">
	          				<form>
	            				<div className="form-group">
	              					<textarea className="form-control" rows="3"></textarea>
	            				</div>
	            				<button type="submit" className="btn btn-primary">Submit</button>
	          				</form>
	        			</div>
	      			</div>

	      			<div className="media mb-4">
        				<img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
    					<div className="media-body">
          					<h5 className="mt-0">Commenter Name</h5>
      						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>

	      			<div className="media mb-4">
	        			<img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
	    				<div className="media-body">
	          				<h5 className="mt-0">Commenter Name</h5>
	      					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
	      					<div className="media mt-4">
	        					<img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
	        					<div className="media-body">
	          						<h5 className="mt-0">Commenter Name</h5>
	  								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
								</div>
							</div>
	          				<div className="media mt-4">
	        					<img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
	        					<div className="media-body">
	              					<h5 className="mt-0">Commenter Name</h5>
	          						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
	        					</div>
	          				</div>
          				</div>
      				</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('visualizePhotoComponent')) {
	ReactDOM.render(<VisualizePhoto />, document.getElementById('visualizePhotoComponent'));
}
