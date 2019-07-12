import React from 'react';

import classes from './buildControl.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button  className={classes.More} onClick={props.addMore}>more</button>
            <button className={classes.Less} onClick={props.deleteOne} disabled={props.disabled}>less</button>
        </div>
    );
}
 
export default buildControl;