import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.show){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <Logo></Logo>
                <nav style={{marginTop:'32px'}}>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}
 
export default sideDrawer;