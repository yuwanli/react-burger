import React from 'react';

import Burger from '../../burger/burger'
import Button from '../../UI/Button/Button'
import classes from './checkoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1>we hope it tastes well</h1>
            <div style={{width: '100%',margin: 'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCanceled}>cancel</Button>
            <Button btnType="Success" clicked={props.onCheckoutContinued}>continue</Button>
        </div>
    );
}
 
export default checkoutSummary;