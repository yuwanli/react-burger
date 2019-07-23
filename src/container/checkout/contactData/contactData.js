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
                value: ''
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
                value: ''
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
    changehandler = (event,key) => {
        const formData = {...this.state.orderForm}
        const current = {...formData[key]}
        current.value = event.target.value
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