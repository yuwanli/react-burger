import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import SelfInput from '../../../components/UI/Input/Input';
import classes from './contactData.css'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: '',
                validation: {
                    required: true
                },
                touched: false
            },
            email: {
                eleType: 'input',
                eleConfig: {
                    type: 'email',
                    placeholder: 'your email'
                },
                value: ''
            },
            street: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: ''
            },
            postal: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'your postal'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 8
                }
            },
            methods: {
                eleType: 'select',
                eleConfig: {
                    options: [
                        {value: 'fastest',text: 'fastest'},
                        {value: 'chipest',text: 'chipest'},
                    ]
                },
                value: ''
            }
        }
        
    }

    orderHandler = (ev) => {
        ev.preventDefault()
        const formData = Object.keys(this.state.orderForm).map(val => {
            const res = {}
            res[val] = this.state.orderForm[val].value
            return res
        })
        console.log(formData)
        // alert('order success')
    }

    checkValidity(value,rules){
        let isValid = true;

        if (rules.required){
            isValid = !!value.trim()  && isValid
        }

        if (rules.minLength) {
            isValid = (value.length >= rules.minLength) && isValid
        }

        if (rules.maxLength) {
            isValid = (value.length <= rules.maxLength) && isValid
        }

        return isValid
    }


    changehandler = (event,key) => {
        const formData = {...this.state.orderForm}
        const current = {...formData[key]}
        current.value = event.target.value
        current.valid = this.checkValidity(current.value,current.validation || {})
        current.touched = true
        formData[key] = current
        this.setState({orderForm:formData})
    }
    render() { 
        const formArray = Object.keys(this.state.orderForm).map(val => {
            return {
                id: val,
                config: this.state.orderForm[val]
            }
        })
        return (
            <div className={classes.contactData}>
                <h4>entry your contact data</h4>
                <form onSubmit={this.orderHandler}>
                    {formArray.map(ele => (
                        <SelfInput 
                        key={ele.id}
                        change={(event) => this.changehandler(event,ele.id)}
                        invalid={!ele.config.valid}
                        touched={ele.config.touched}
                        shouldValidate={ele.config.validation}
                        eleType={ele.config.eleType} 
                        eleConfig={ele.config.eleConfig} 
                        eleValue={ele.config.value}></SelfInput>
                    ))}
                    <Button btnType="Success">Order</Button>
                </form>

            </div>
        );
    }
}
 
export default ContactData;