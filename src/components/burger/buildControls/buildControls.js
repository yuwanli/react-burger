import React from 'react'

import classes from './buildControls.css'
import BuildControl from './buildControl/buildControl'

const controls = [
    {
        label: 'salad',
        type: 'salad'
    },
    {
        label: 'bacon',
        type: 'bacon'
    },
    {
        label: 'cheese',
        type: 'cheese'
    },
    {
        label: 'meat',
        type: 'meat'
    },
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <b>{props.total.toFixed(2)}</b></p>
            {controls.map(val => <BuildControl key={val.label} label={val.label} 
            addMore={() => props.addMore(val.type)}
            deleteOne={() => props.deleteOne(val.type)}
            disabled={props.disableObj[val.type]}
            ></BuildControl>)}
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={() => props.ordered()}
            >order now</button>
        </div>
    );
}
 
export default buildControls;