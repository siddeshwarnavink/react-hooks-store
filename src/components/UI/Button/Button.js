import React from 'react';

import classes from './Button.module.css';

const button = props => {
    const classList = [classes.Button];
    if(props.hollow) {
        classList.push(classes.Hollow)
    }
    
    return (
        <button className={classList.join(' ')}>{props.children}</button>
    )
}

export default button;