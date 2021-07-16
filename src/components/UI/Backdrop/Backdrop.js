import React from 'react';

import classes from './Backdrop.module.css'

const backdrop = ({ show, removeModal }) => {
    return (
        show ? <div onClick={removeModal} className={classes.Backdrop}></div> : null
    );
}

export default backdrop;