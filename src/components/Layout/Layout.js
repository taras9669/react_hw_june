import React from 'react';
import {NavLink} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <NavLink to ="/todos">Users</NavLink>
            <NavLink to ="/albums">Posts</NavLink>
            <NavLink to ="/comments">Posts</NavLink>
        </div>
    );
};

export default Layout;