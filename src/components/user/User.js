import React from 'react';

export default function User ({item, getPostByUser}) {
    return (<div>
        <div>ID:{item.id} - {item.name} - {item.username} - City:{item.address.city}</div>
        <button onClick={() => getPostByUser(item.id)}>Отримати всі пости</button>
    </div>);
}