import React, { Component } from "react";
import Input from '../functions/Input';
import BirthDay from '../functions/BirthDay';
import BirthMonth from '../functions/BirthMonth';
import BirthYear from '../functions/BirthYear';
const yearMax = new Date().getFullYear() - 1;

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
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeBirthdayOption = this.onChangeBirthdayOption.bind(this);
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

    async formSubmit(){
        await fetch('/signup_user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                birthdate: `${this.state.month} ${this.state.day} ${this.state.year}`,
                password_digest: this.state.password_digest,
                username: this.state.username, 
                private: this.state.private,
                profile_picture: this.state.profile_picture
            })
        }).then(response => {
            response.json();
            this.props.history.push({
                pathname: "/home",
                state: {cur_usr_username: this.state.username}
            });
        });
    }

    onChangeBirthdayOption(e){
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        console.log('this is the name arg: ', name);
        console.log('this is the target.value: ', value);
        this.setState({
            [name]: `${value}`
        })
    }

    render() {
        console.log(this.state.month);
        console.log(this.state.day);
        console.log(this.state.year);
        const birthdate = `${this.state.month} ${this.state.day} ${this.state.year}`
        return(
            <form onSubmit={ this.handleSubmit }>
                <Input label="Name: " htmlFor="name" inputID="name" name="name" value={this.state.name} onChange={ this.onChangeInput } placeholder="Name" type="text" required="required" /> 
                <Input label="Username: " htmlFor="username" inputID="username" name="username" value={ this.state.username } onChange={ this.onChangeInput } placeholder="username" type="text"/>
                <Input label="Email: " htmlFor="email" inputID="email" name="email" value={ this.state.email } onChange={ this.onChangeInput } placeholder="Email" type="text" required="required"/>
                {/* <select name="days" value={this.state.day} id="days" name="day" onChange={ this.onChangeBirthdayOption }>
                    <option key="0.1" name="day" value="" selected="selected" disabled></option>
                    {SelectDay}
                </select> */}
                <BirthMonth optionName="month" selectName="months" selectValue={ this.state.month } selectID="months" selectOnChange={ this.onChangeBirthdayOption } />
                <BirthDay optionName="day" selectName="days" selectValue={ this.state.day } selectID="days" selectOnChange={ this.onChangeBirthdayOption } />
                <BirthYear optionName="year" selectName="years" selectValue={ this.state.year } selectID="years" selectOnChange={ this.onChangeBirthdayOption } />
                <p>{ Date.parse(birthdate).valid_date? }</p>
                {/* <select name="months" value={this.state.month} id="months" name="month" onChange={ this.onChangeBirthdayOption }>
                    <option key="0.2" name="month" value="" selected="selected" disabled></option>
                   {SelectMonth} 
                </select>
                <select name="years" value={this.state.year} id="years" name="year" onChange={ this.onChangeBirthdayOption }>
                    <option key="0.3" name="year" value="" selected="selected" disabled></option>
                   {SelectYear} 
                </select> */}
                <Input label="Password: " htmlFor="password" inputID="password" name="password_digest" value={this.state.password_digest} onChange={this.onChangeInput} placeholder="Password" type="password" required="required" />
                <Input label="Profile Picture " htmlFor="profile_picture" inputID="profile_picture" name="profile_picture" value={this.state.profile_picture} onChange={ this.onChangeInput } type="file" />
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

export default SignUp;