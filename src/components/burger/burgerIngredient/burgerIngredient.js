import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './burgerIngredient.css'

class BurgerIngredient extends Component{
    render() {
        let typeToTemplate = {
            'bread-bottom': <div className={classes.BreadBottom}></div>,
            'bread-top': (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div> 
                </div>
            ),
            'meat': <div className={classes.Meat}></div>,
            'cheese': <div className={classes.Cheese}></div>,
            'bacon': <div className={classes.Bacon}></div>,
            'salad': <div className={classes.Salad}></div>,
        }
        return typeToTemplate[this.props.type] || null;
    }
}

BurgerIngredient.propType = {
    type: PropTypes.string.isRequired
}
 
export default BurgerIngredient;