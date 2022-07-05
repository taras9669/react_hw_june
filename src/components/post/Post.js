import React from 'react';

const Post = ({item}) => {
    return (
        <div>{item.id} - {item.title}</div>
    );
}
export default Post;