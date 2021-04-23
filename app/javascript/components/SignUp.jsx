import React, { Component } from "react";
import Tweetes from '../components/Tweetes';

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
            private: false,
            profile_picture: ''
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
        console.log(this.state)
        var data = this.state;
        await fetch('/signup_user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json())
          .then(() => <Tweetes />);
    }

    render() {
        return(
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={ this.state.name } placeholder="Name"
                onChange={ (e) => this.onChangeInput(e) } required />
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={ this.state.username }
                onChange={ (e) => this.onChangeInput(e) } />
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={ this.state.email } name="email" 
                placeholder="Email" onChange={ this.onChangeInput } required />
                <label htmlFor="birthdate">Birthdate: </label>
                <input type="text" id="birthdate" name="birthdate" value={ this.state.birthdate }
                onChange={ (e) => this.onChangeInput(e) } 
                placeholder="Ex. Jan 15 1991" required />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" onChange={ (e) => this.onChangeInput(e) } 
                name="password_digest" required />
                <input type="image" name="profile_picture" />
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

export default SignUp;