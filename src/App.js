
/*Отримати всіх користувачів з jsonplaceholder, вивести їх.
Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
Запити робити через axios, організація коду через сервіси
*/
import React, {useState} from 'react';
import Users from "./components/users/Users";
/*import Post from "./components/post/Post";*/
import {getUsersPosts} from "./services/user.api.service";


export default function App() {

    let [posts, setPosts] = useState([]);
    const getPostByUser = (id) => {
        getUsersPosts(id).then(({data}) => setPosts([...data]));
    }
    return (<div>
        <h2> All posts of user:</h2>
        {posts.map(value => <div>{value.body}</div>)
        }
        <hr/>
        <Users getPostByUser={getPostByUser}/>
    </div>);
}