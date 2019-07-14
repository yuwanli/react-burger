import React from 'react';

import burgerLogo from '../../assets/images/logo.png'
import classes from './Logo.css'

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="logo"></img>
        </div>
    );
}
 
export default Logo;