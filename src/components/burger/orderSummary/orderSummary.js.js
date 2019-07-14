import React from 'react';

import Aux from '../../../hoc/Aux'

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
            <p>continue?</p>
        </Aux>
    );
}
 
export default orderSummary;