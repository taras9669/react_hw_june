import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={css.header}>
            <NavLink to ="/todos">Todos</NavLink>
            <NavLink to ="/albums">Albums</NavLink>
            <NavLink to ="/comments">Comments</NavLink>
            <Outlet/>
        </div>
    );
};

export default Layout;