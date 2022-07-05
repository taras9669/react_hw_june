import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {getUsers} from "../../services/user.api.service";


export default function Users({getPostByUser}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));

    }, []);
    return <div>
        {users.map(value => <User key={value.id} item={value} getPostByUser={getPostByUser}/>)}
    </div>
}
