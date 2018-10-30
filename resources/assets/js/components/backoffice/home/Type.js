import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Logout from './Logout';

export default class Type extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper ">
				<Sidebar />
				<div className="main-panel">
                    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <Link className='navbar-brand' to='/backoffice/types'>
                                	Types d'activités
                            	</Link>
                            </div>
                            <Logout />
                        </div>
                    </nav>
                    <div className="content">
                        <div className="container-fluid">
                            Type d'activités
                        </div>
                    </div>
			    </div>
            </div>
		);
	}
}
