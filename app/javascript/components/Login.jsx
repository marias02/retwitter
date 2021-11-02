import React, { Component } from "react";
import Input from '../functions/Input';
import ContainedButton from '../functions/ContainedButton'
import { loginUser } from '../functions/ApiUtils';
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password_digest: ''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    async handleSubmit(e){
        e.preventDefault();

        await loginUser({
            username: this.state.username,
            password_digest: this.state.password_digest
        })
    }

    render(){
        return(
            <div className="form">
                <div className="step_form">
                    <i className="fa fa-twitter login" />
                    <h2>Log In on Retwitter</h2>
                    <Input label="Phone, email, or username" 
                    labelClass="form_label" inputID="username" 
                    inputClass="form_field" name="username" 
                    value={ this.state.username } onChange={ this.onChangeInput }
                    type="text" required="true" style="login" />
                    <Input label="Password" labelClass="form_label"
                    inputID="password" inputClass="form_field" name="password_digest" 
                    onChange={ this.onChangeInput } type="password" required="true"
                    value={ this.state.password_digest } style="login" />
                    <ContainedButton className="confirm" type="primary" 
                    Text="Log In" onClick={ this.handleSubmit } />
                </div>
                
            </div>
        )
    }
}

export default Login;