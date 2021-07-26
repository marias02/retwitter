import React, { Component } from "react"
import Input from '../functions/Input'
import ContainedButton from '../functions/ContainedButton'
import IconButton from '../functions/IconButton'

export class Confirm extends Component{
    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();

        this.props.prevStep();
    }

    render(){
        const { name, email, phone, day, month, year } = this.props.values;

        return (
            <div className="step_form">
                <div className="top-form">
                    <IconButton onClick={ this.back }
                    iconClass="fa fa-arrow-left"/>
                    <i className="fa fa-twitter"></i>
                    <ContainedButton onClick={ this.continue }
                    className="confirm_next" Text="Next" type="primary" />
                </div>

                <h2>Create your account</h2>
                <Input type="text" inputID="name" inputClass="form_field" 
                name="name" value={ name } readOnly="true" 
                labelClass="form_label confirm" label="Name" />

                {
                    phone === '' && email !== '' ? (
                        <Input type="text" inputID="email" 
                        inputClass="form_field" name="email" value={ email } 
                        readOnly="true" labelClass="form_label confirm" label="Email" />
                    ) : (
                        <Input type="text" inputID="phone" inputClass="form_field" 
                        name="phone" value={ phone } readOnly="true" 
                        labelClass="form_label confirm" label="Phone" />
                    )
                }

                <Input type="text" inputID="birthdate" inputClass="form_field" 
                name="birthdate" value={`${ day } ${ month } ${ year }`}
                readOnly="true" labelClass="form_label confirm" label="Birth date" />

                <p id="confirm_p">By signing up you agree our cookies use. 
                Others will be able to find you by email or phone number when 
                provided.</p>

                <ContainedButton className="confirm" 
                onClick={ this.props.handleSubmit } type="primary" Text="Sign Up" />
            </div>
        )
    }
}

export default Confirm