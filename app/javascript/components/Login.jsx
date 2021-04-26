import React, { Component } from "react";
import Tweets from './Tweets';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            dataarr: []
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
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" onChange={ this.onChangeInput }
                    value={ this.state.username }/>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" name="password" onChange={ this.onChangeInput }
                    value={ this.state.password } />
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