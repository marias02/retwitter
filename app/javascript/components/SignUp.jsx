import React, { Component } from "react";
import Input from '../functions/Input';
import BirthDay from '../functions/BirthDay';
import BirthMonth from '../functions/BirthMonth';
import BirthYear from '../functions/BirthYear';
import { signUpUser } from "../functions/ApiUtils";

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            day: '',
            month: '',
            year: '',
            password_digest: '',
            username: '',
            private: false,
            profile_picture: '',
            registered_user: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBirthdateOption = this.onChangeBirthdateOption.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeBirthdayOption = this.onChangeBirthdayOption.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onChangeInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    onChangeBirthdateOption(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();

        this.formSubmit(e.target);
    };

    async formSubmit(){
        await signUpUser({ name: this.state.name, phone: this.state.phone, 
            email: this.state.email, 
            birthdate: `${this.state.month} ${this.state.day} ${this.state.year}`,
            password_digest: this.state.password_digest,
            username: this.state.username, private: this.state.private,
            profile_picture: this.state.profile_picture
        })
    }

    render() {
        const birthdate = `${this.state.month} ${this.state.day} ${this.state.year}`
        return(
            <form onSubmit={ this.handleSubmit }>
                <Input label="Name: " htmlFor="name" inputID="name" name="name" value={this.state.name} onChange={ this.onChangeInput } placeholder="Name" type="text" required="required" /> 
                <Input label="Username: " htmlFor="username" inputID="username" name="username" value={ this.state.username } onChange={ this.onChangeInput } placeholder="username" type="text"/>
                <Input label="Email: " htmlFor="email" inputID="email" name="email" value={ this.state.email } onChange={ this.onChangeInput } placeholder="Email" type="text" required="required"/>
                <BirthMonth optionName="month" selectName="month" selectValue={ this.state.month } selectID="months" onChange={ this.onChangeBirthdateOption } />
                <BirthDay optionName="day" selectName="day" selectValue={ this.state.day } selectID="days" onChange={ this.onChangeBirthdateOption } />
                <BirthYear optionName="year" selectName="year" selectValue={ this.state.year } selectID="years" onChange={ this.onChangeBirthdateOption } />
                <p>This is the {birthdate}...</p>
                <Input label="Password: " htmlFor="password" inputID="password" name="password_digest" value={this.state.password_digest} onChange={this.onChangeInput} placeholder="Password" type="password" required="required" />
                <Input label="Profile Picture " htmlFor="profile_picture" inputID="profile_picture" name="profile_picture" value={this.state.profile_picture} onChange={ this.onChangeInput } type="file" />
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

export default SignUp;