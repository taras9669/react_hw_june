import React from 'react';

const Post = ({post}) => {
    return (
        <div>dfdf
            <h2>Post:</h2>
            {post.id} --- {post.title}
        </div>
    );
};

export default Post;