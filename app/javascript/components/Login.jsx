import React, { Component } from "react";
import Input from '../functions/Input';
import { loginUser } from '../functions/ApiUtils';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
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
            <div>
                <form onSubmit={ this.handleSubmit }>
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