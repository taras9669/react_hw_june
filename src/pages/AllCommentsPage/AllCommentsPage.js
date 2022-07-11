import React from 'react';
import {useEffect, useState} from "react";
import Comment from "../../components/Comment/Comment";
import {Outlet} from "react-router-dom";

const AllCommentsPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value =>
                setComments([...value]))
    }, []);

    return (
        <div>
            <h1>COMMENTS:</h1>
            <Outlet/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>

    );
};

export default AllCommentsPage;