import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h3>Post:</h3>
            {post.id} --- {post.title}
        </div>
    );
};

export default Post;