import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './Navigation.module.css'

const navigation = props => (
    <nav className={classes.Navigation}>
        <NavLink exact to="/" activeClassName={classes.Active} id="nav-feed">Feed</NavLink>
        <NavLink to="/bookmarks" activeClassName={classes.Active} id="nav-bookmark">Bookmarks</NavLink>
    </nav>
)

export default navigation;