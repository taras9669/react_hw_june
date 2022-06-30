import React from 'react';

const User = ({user, choseUser}) => {
    return (
        <div>
            <div>{user.id}---{user.name}</div>
            <button onClick={()=>choseUser(user)}>Details</button>
        </div>
    );
};

export default User;