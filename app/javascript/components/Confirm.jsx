import React, { Component } from "react"
import Input from '../functions/Input'

export class Confirm extends Component{
    render(){
        return (
            <div className="first_step_form">
                <div className="top-form">
                    <button onClick={this.back}
                        className="back_landing_page"><i
                            className="fa fa-arrow-left"
                            aria-hidden="true"></i>
                    </button>
                    <i className="fa fa-twitter"></i>
                    <button onClick={this.continue}
                        id="next_confirm_button">Next</button>
                </div>

                <h2>Create your account</h2>
                <div className="container">
                    <input type="text" id="name" className="form_field"
                        name="name" value={this.props.values.name} readOnly />
                    <span className="form_label confirm">Name</span>
                </div>

                {
                    this.props.values.phone === '' && 
                    this.props.values.email !== '' ? (
                        <div className="container">
                            <input type="text" id="email"
                                className="form_field" name="email"
                                value={this.props.values.email} readOnly />
                            <span className="form_label confirm">Email</span>
                        </div>
                    ) : (
                        <div className="container">
                            <input type="text" id="phone"
                                className="form_field" name="phone"
                                value={this.props.values.phone} readOnly />
                            <span className="form_label confirm">Phone</span>
                        </div>
                    )
                }

                <div className="container">
                    <input type="text" id="birthdate"
                        className="form_field" name="birthdate"
                        value={`${this.props.values.day} 
                            ${this.props.values.month} 
                            ${this.props.values.year}`} readOnly />
                    <span className="form_label confirm">Birth date</span>
                </div>

                <p id="confirm_p">By signing up you agree our
                cookies use. Others will be able to find you by email
                or phone number when
                        provided.</p>

                <button id="confirm_button" onClick={this.props.handleSubmit}>Sign Up</button>
            </div>
        )
    }
}

export default Confirm