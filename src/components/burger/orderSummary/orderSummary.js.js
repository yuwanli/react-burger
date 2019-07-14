import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button.js'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
                </li>
            )
        })
    return (
        <Aux>
            <h3>you order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><b>total price: {props.price}</b></p>
            <p>continue?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>continue</Button>
        </Aux>
    );
}
 
export default orderSummary;