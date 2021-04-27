import React, { Component } from "react";
import Input from '../functions/Input';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmitForm(e){
        
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.onSubmitForm } id="ajax_form" className="login">
                    <Input htmlFor="username" label="Username: " type="text" inputID="username" name="username" placeholder="Username" onChange={ this.onChangeInput } value={ this.state.username } />
                    <Input htmlFor="password" label="Password: " type="password" inputID="password" name="password_digest" placeholder="Password" onChange={ this.onChangeInput } value={ this.state.password_digest } />
                    <input type="submit" value="Login"/> 
                </form> 
                <div className={`message ${this.state.isError && 'error'}`}>
                    {this.state.isSubmitting ? "Submitting..." : this.state.message}
                </div>
            </div>
        )
    }
}

export default Login;