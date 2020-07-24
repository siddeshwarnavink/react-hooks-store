import React from 'react';

import classes from './Button.module.css';

const button = props => {
    const classList = [classes.Button];
    if(props.hollow) {
        classList.push(classes.Hollow)
    }
    if(props.className) {
        classList.push(props.className)
    }
    
    return (
        <button className={classList.join(' ')} onClick={props.clicked}>{props.children}</button>
    )
}

export default button;