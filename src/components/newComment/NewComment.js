import React from 'react';
import {useForm} from "react-hook-form";

const NewComment = () => {
    let idArray =[
        {id:1, name:'1'},
        {id:2, name:'2'},
        {id:3, name:'3'},
    ]

    let {register,handleSubmit} = useForm();
    let submit = (obj) => {
        console.log(obj);

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body:JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        }).then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    {...register("title")}/>
                <input
                    type="text"
                    {...register("body")}/>
                <select{...register("commentId")}>
                    {idArray.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
                </select>
                <button>Зберегти</button>
            </form>
        </div>
    );
};

export default NewComment;