import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.post = this.props.item;
    }



    render() {
        return (
            <div>
                ID:{this.post.id} - Name:{this.post.title}
            </div>
        );
    }
}

export default Post;