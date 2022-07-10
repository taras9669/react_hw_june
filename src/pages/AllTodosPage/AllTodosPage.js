import React, {useEffect, useState} from 'react';
import todo from "../../components/Todo/Todo";
import Todo from "../../components/Todo/Todo";

const AllTodosPage = () => {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(value =>
            setTodos([...value]))
    },[])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default AllTodosPage;