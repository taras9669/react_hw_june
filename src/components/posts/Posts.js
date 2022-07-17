import React, {Component} from 'react';
import Post from "../post/Post";
import {PostsApiService} from "../../services/posts.api.service";


class Posts extends Component {
    state = {posts:[]}

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.postsApiService = new PostsApiService();
        this.postsApiService.getPosts().then(value => this.setState({posts: value}));
    }



    render() {
        return (
            <div>
                <h3>Posts:</h3>
                {this.state.posts.map(value => <Post key={value.id} item={value}></Post>)}
            </div>
        );
    }
}

export default Posts;