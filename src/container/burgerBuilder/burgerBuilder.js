import React, {Component} from 'react'

import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/burger/burger'
import BuildControls from '../../components/burger/buildControls/buildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/burger/orderSummary/orderSummary.js'
import axios from '../../axios-order'

const  INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1.3
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        total: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (objCopy) {
        const ingredients = {
            ...objCopy
        }
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            })
            .reduce((res,val) => {
                return res + val;
            },0)

        this.setState({
            purchasable: sum > 0
        })
    }

    addMore = (type) => {
        const count = this.state.ingredients[type] + 1
        const objCopy = {...this.state.ingredients}
        objCopy[type] = count
        const totalNow = this.state.total + INGREDIENTS_PRICE[type]
        
        this.setState({
            total: totalNow,
            ingredients: objCopy
        })
        this.updatePurchaseState(objCopy)
    }
    deleteOne = (type) => {
        if (this.state.ingredients[type] === 0) {
            return
        }
        const count = this.state.ingredients[type] - 1
        const objCopy = {...this.state.ingredients}
        objCopy[type] = count
        const totalNow = this.state.total - INGREDIENTS_PRICE[type]
        
        this.setState({
            total: totalNow,
            ingredients: objCopy
        })
        this.updatePurchaseState(objCopy)
    }
    purchaseHandle = () => {
        this.setState({
            purchasing: true
        })
    }
    purchaseCancelHandle = () => {
        this.setState({
            purchasing: false
        })
    }
    purchaseContinueHandle = () => {
        // alert('success')
        const order = {
            ingredients: this.state.ingredients,
            preice: this.state.total,
            customer: {
                name: 'wanli.yu',
                address: {
                    street: 'beibei',
                    zipCode: '123'
                },
                email: 'wanli.yu@beibei.com.cn'
            }
        }
        // axios.post('/orders.json',order)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        const queryString = Object.keys(this.state.ingredients).map((val) => `${val}=${this.state.ingredients[val]}`).join('&')
        this.props.history.push({
            pathname: '/checkout',
            search:'?' + queryString
        })
    }
    render() {
        const disableObj = Object.keys(this.state.ingredients).reduce((res,val) => {
            res[val] = this.state.ingredients[val] <= 0
            return res
        },{})
        return (
            <Aux>
                <Modal 
                show={this.state.purchasing}
                modalClose={this.purchaseCancelHandle}
                >
                    <OrderSummary 
                        price={this.state.total.toFixed(2)}
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandle}
                        purchaseContinued={this.purchaseContinueHandle}
                    ></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                total={this.state.total} 
                addMore={this.addMore} 
                deleteOne={this.deleteOne} 
                disableObj={disableObj}
                ordered={this.purchaseHandle}
                purchasable={this.state.purchasable}
                ></BuildControls>
                
            </Aux>
        )
    }
}

export default BurgerBuilder