import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'reactstrap';

export default class ShowAlert extends Component {
	constructor(props) {
        super(props);
        this.state = {
            msg: props.text,
            color: props.color
        };
    }

	render() {
		return (
			<div>
                <Alert color={this.state.color}>
                    {this.state.msg}
                </Alert>
            </div>
		);
	}
}
