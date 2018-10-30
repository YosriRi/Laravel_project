import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
	constructor(props) {
        super(props);
        
        const admin = JSON.parse(localStorage.getItem('admin'));

        this.state = {
            admin: admin
        };
	}

	render() {
		return (
			<div className="sidebar" data-color="purple" data-background-color="white">
                <div className="logo">
                    <a href="#" className="simple-text logo-normal">
                        {this.state.admin.firstname} {this.state.admin.lastname}
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active">
                            <Link className='nav-link' to='/backoffice'>
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to='/backoffice/activites'>
                                <i className="material-icons">content_paste</i>
                                <p>Activités</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to='/backoffice/utilisateurs'>
                                <i className="material-icons">content_paste</i>
                                <p>Utilisateurs</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to='/backoffice/categories'>
                                <i className="material-icons">content_paste</i>
                                <p>Catégories d'activités</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className='nav-link' to='/backoffice/types'>
                                <i className="material-icons">content_paste</i>
                                <p>Types d'activités</p>
                            </Link>
                        </li>
                            <li className="nav-item active">
                            <Link className='nav-link' to='/backoffice/promotions'>
                                <i className="material-icons">content_paste</i>
                                <p>Promotions</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
		);
	}
}
