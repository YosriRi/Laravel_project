import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ClientLogo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="clinetslogo" className="clinetslogo">
    			<div className="containter">
        			<div className="row">
            			<div className="col-md-10 col-md-offset-1">
                			<div className="row">
                    			<div className="main_clinetslogo text-center">
                        			<div className="col-md-2"> <a href=""><img src="images/clogo1.png" alt="" /></a></div>
                        			<div className="col-md-2"> <a href=""><img src="images/clogo2.png" alt="" /></a></div>
                    				<div className="col-md-2"> <a href=""><img src="images/clogo3.png" alt="" /></a></div>
                        			<div className="col-md-2"> <a href=""><img src="images/clogo4.png" alt="" /></a></div>                        
                        			<div className="col-md-2"> <a href=""><img src="images/clogo6.png" alt="" /></a></div>
                    			</div>
            				</div>
            			</div>
        			</div>
    			</div>
			</section>
		);
	}
}
