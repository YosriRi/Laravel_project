import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Logout from './Logout';
import CreateActivity from '../create/CreateActivity';
import ListActivities from '../list/ListActivities';
import { Button } from 'reactstrap';

export default class Activity extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            showArray: true
        };
    }
    
    onChangeCreateActivity() {
        this.setState({
            showArray: false
        });
    }

    onChangeShowActivities() {
        this.setState({
            showArray: true
        });
    }

	render() {
        let showArray;
        if (this.state.showArray === true) {
            showArray = <ListActivities />
        } else {
            showArray = <CreateActivity />
        }
		return (
			<div className="wrapper ">
				<Sidebar />
				<div className="main-panel">
                    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <Button color="secondary" onClick={this.onChangeShowActivities.bind(this)}>Afficher les activités</Button>
                                <Button color="success" onClick={this.onChangeCreateActivity.bind(this)}>Créer une activité</Button>
                            </div>
                            <Logout />
                        </div>
                    </nav>
                    <div className="content">
                        <div className="container-fluid">
                            {showArray}
                        </div>
                    </div>
			    </div>
            </div>
		);
	}
}
