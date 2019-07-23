import React, { Component } from 'react';

import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './contactData/contactData';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    checkoutCanceledHandler = () => {
        console.log(this.props)
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    componentDidMount() {
        console.log(this.props.location)
        const queryArray = [...new URLSearchParams(this.props.location.search).entries()]
        const ingredients = {}
        queryArray.forEach((val) => {
            ingredients[val[0]] = val[1]
        })
        this.setState({
            ingredients
        })
    }
    
    render() { 
        console.log(this.props.match.path)
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCanceled={this.checkoutCanceledHandler}
                    onCheckoutContinued={this.checkoutContinuedHandler}
                ></CheckoutSummary>
                <Route 
                    path={this.props.match.path+'/contact-data'} 
                    render={() => <ContactData ingredients={this.state.ingredients}></ContactData>}
                ></Route>
            </div>
        );
    }
}
 
export default Checkout;