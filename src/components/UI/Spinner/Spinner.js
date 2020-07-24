import React from 'react';

import classes from './Spinner.module.css';

const spinner = () => (
    <div className={classes.Spinner} id="loading-spinner">Loading...</div>
);

export default spinner;