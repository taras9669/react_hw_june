import React from 'react';
import {useEffect, useState} from "react";
import Todo from "../../components/Todo/Todo";

const AllTodosPage = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(value =>
                setTodos([...value]))
    }, []);

    return (
        <div>
            <h1>TODOS:</h1>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>

    );
};
export default AllTodosPage;