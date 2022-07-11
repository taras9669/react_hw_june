import React from 'react';
import {useEffect, useState} from "react";
import Post from "../../components/Post/Post";
import {useParams} from "react-router-dom";

const PostPage = () => {
    let {postId} = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+ postId+'')
            .then(response => response.json())
            .then(value =>
                setPost({...value}))
    }, [postId]);

    return (
        <div>
            {<Post key={post.id} post={post}/>}
        </div>

    );
};

export default PostPage;