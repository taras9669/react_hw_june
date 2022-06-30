import React from 'react';

const Usersdetails = ({user}) => {
    return (
        <div>
            <div>ID: {user.id}</div>
            <div>NAME: {user.name}</div>
            <div>USERNAME: {user.username}</div>
            <div>EMAIL: {user.email}</div>
            <div>CITY: {user.address.city}</div>
            <div>PHONE: {user.phone}</div>
        </div>
    );
};

export default Usersdetails;