import React from 'react';

import classes from './Layout.module.css'
import Navigation from '../components/Navigation/Navigation'

const layout = (props) => (
    <React.Fragment>
        <Navigation />
        <main className={classes.PageContent}>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;