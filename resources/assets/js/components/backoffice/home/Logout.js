import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default class Header extends Component {
	constructor(props) {
        super(props);
    }
    
    logOut() {
        localStorage.clear();
        window.location.replace("/backoffice/connexion");
    }

	render() {
		return (
            <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Button color="danger" onClick={this.logOut.bind(this)}>Se déconnecter</Button>
                    </li>
                </ul>
            </div>
		);
	}
}
