import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './Navigation.module.css'

const navigation = props => (
    <nav className={classes.Navigation}>
        <NavLink exact to="/" activeClassName={classes.Active}>Feed</NavLink>
        <NavLink to="/bookmarks" activeClassName={classes.Active}>Bookmarks</NavLink>
    </nav>
)

export default navigation;