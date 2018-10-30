import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextArea from './TextArea';

export default class Comment extends Component {
	constructor(props) {
		super(props);
		const url = window.location.pathname;
		const idActivity = url.substring(url.lastIndexOf('/') + 1);

		this.state = {
            comments: []
		};
		
		axios.get('/api/comments?id_activity=' + idActivity)
        .then((res) => {
            const result = res.data.data;
            // console.log(result);
            this.setState({
                comments: result
            });
        })
        .catch(function (error) {
            console.log(error);
        });
	}

	render() {
		const token = localStorage.getItem('userToken');
        let textArea;
        if (token !== null) {
            textArea = <TextArea />;
        } else {
			textArea = 'Pour commenter, veuillez vous connecter';
		}
		return (
			<div>
				<div className="card my-4">
					{textArea}
				</div>
				<div className="media mb-4">
					<div className="media-body">
						{ this.state.comments.map(comment =>
							<div key={comment.id}>
								<h4 className="mt-0">{comment.user.firstname} {comment.user.lastname}</h4>
								{comment.comment}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
