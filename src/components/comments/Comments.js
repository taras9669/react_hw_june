import React, {Component} from 'react';
import {CommentsApiService} from "../../services/comments.spi.service";
import Comment from "../comment/Comment";

 class Comments extends Component {
    state = {comments:[]}

    constructor(props) {
        super(props);
    }
        componentDidMount() {
            this.commentsApiService = new CommentsApiService();
            this.commentsApiService.getComments().then(value => this.setState({comments: value}));
        }



    render() {
        return (
            <div>
                <h3>Comments:</h3>
                {this.state.comments.map(value => <Comment key={value.id} item={value}></Comment>)}
            </div>
        );
    }
}

export default Comments;