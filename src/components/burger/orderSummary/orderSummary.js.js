import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button.js'

class OrderSummary extends Component{

    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
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
                <p><b>total price: {this.props.price}</b></p>
                <p>continue?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>continue</Button>
            </Aux>
        )
        
    }
}

 
export default OrderSummary;