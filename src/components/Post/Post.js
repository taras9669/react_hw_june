import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h2>Post:</h2>
            {post.id} --- {post.title}
        </div>
    );
};

export default Post;