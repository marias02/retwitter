import React, { Component } from "react";

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            birthdate: '',
            password_digest: '',
            username: '',
            private: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onChangeInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();

        this.formSubmit(e.target);
    };

    async formSubmit(formData){
        var data = new FormData(formData);
        await fetch('/signup_user', {
            Accept: 'application/json',
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.text())
        .then(res => console.log(res))
    }

    render() {
        return(
            <form onSubmit={ this.handleSubmit }>
                <input type="text" name="name" value={ this.state.name } placeholder="Name"
                onChange={ (e) => this.onChangeInput(e) } required />
                <input type="text" value={ this.state.email } name="email" 
                placeholder="Email" onChange={ this.onChangeInput } required />
                <input type="text" name="birthdate" value={ this.state.birthdate }
                onChange={ (e) => this.onChangeInput(e) } 
                placeholder="Ex. Jan 15 1991" required />
                <input type="password" onChange={ (e) => this.onChangeInput(e) } 
                name="password_digest" required />
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

export default SignUp;