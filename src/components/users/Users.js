import React, {useEffect, useState} from 'react';
import User from "../user/User";
import Usersdetails from "../userdetails/Usersdetails";

const Users = ({userId}) => {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(value => value.json())
        .then(value => {setUsers(value);
        });
},[]);
const choseUser = (userItem) => {
    setUser(userItem);};

return (<div>
    {user.id && <Usersdetails user={user}/>}
    {users.map((user, index) => <User
                key={index}
                user={user}
                choseUser={choseUser}
                />)}
        </div>);
};

export default Users;