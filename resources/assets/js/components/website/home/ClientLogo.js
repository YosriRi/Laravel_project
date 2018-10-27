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
                    			<div className="main_clinetslogo text-center center">
                        			<img  className="col-md-2" src="images/clogo1.png" alt="" />
                        			<img  className="col-md-2" src="images/clogo2.png" alt="" />
                    				<img  className="col-md-2" src="images/clogo3.png" alt="" />
                        			<img  className="col-md-2"src="images/clogo4.png" alt="" /> 
									<img  className="col-md-2"src="images/clogo5.png" alt="" />                      
                        			<img  className="col-md-2" src="images/clogo6.png" alt="" />
                    			</div>
            				</div>
            			</div>
        			</div>
    			</div>
			</section>
		);
	}
}
