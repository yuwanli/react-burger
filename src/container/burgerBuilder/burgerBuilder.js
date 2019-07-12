import React, {Component} from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/burger'
import BuildControls from '../../components/burger/buildControls/buildControls'


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
        total: 4
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
    }
    render() {
        const disableObj = Object.keys(this.state.ingredients).reduce((res,val) => {
            res[val] = this.state.ingredients[val] <= 0
            return res
        },{})
        return (
            <Aux>
                <div>Burger</div>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls total={this.state.total} addMore={this.addMore} deleteOne={this.deleteOne} disableObj={disableObj}></BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder