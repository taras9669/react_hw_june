import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
          {comment.id} --- <Link to={'/posts/' +comment.postId+''}>{comment.name}</Link>
        </div>
    );
};

export default Comment;