import React from 'react';
import classes from './Input.css'

const input = (props) => {
    const inputClasses = [classes.InputElement]
    if (props.invalid && props.touched && props.shouldValidate){
        inputClasses.push(classes.Invalid)
    }
    const inputObj = {
        'input': <input onChange={props.change} className={inputClasses.join(' ')} {...props.eleConfig} value={props.eleValue}></input>,
        'textarea': <textarea onChange={props.change} className={inputClasses.join(' ')} {...props.eleConfig} value={props.eleValue}></textarea>,
        'select': (
            <select 
                onChange={props.change}
                className={inputClasses.join(' ')}
                value={props.value}
                >
                {props.eleConfig.options && props.eleConfig.options.map(option => (
                    <option 
                        key={option.text}
                        value={option.value}
                    >{option.text}</option>
                ))}
            </select>
        )
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputObj[props.eleType]}
        </div>
    );
}
 
export default input;