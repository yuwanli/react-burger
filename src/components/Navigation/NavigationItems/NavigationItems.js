import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = (prop) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger builder</NavigationItem>
            <NavigationItem link="/">checkout</NavigationItem>
        </ul>
    );
}
 
export default navigationItems;