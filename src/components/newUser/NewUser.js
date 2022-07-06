import React from 'react';
import {useForm} from "react-hook-form";

const NewUser = () => {
    let idArray =[
        {id:1, name:'one'},
        {id:2, name:'two'},
        {id:3, name:'three'},
    ]

    let {register,handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name:"ім'я",
            surname:"прізвище"
        }
    });
    let submit = (obj) => {
        console.log(obj);

        fetch("https://jsonplaceholder.typicode.com/users", {
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
                   {...register("name", {required:true})}/>
               {errors.name && <span>Поле є обов'язковим!</span>}
               <input
                   type="text"
                   {...register("surname")}/>
               <select{...register("userId")}>
               {idArray.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
                   </select>
               <button>Зберегти</button>
           </form>
        </div>
    );
};

export default NewUser;