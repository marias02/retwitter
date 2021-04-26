import React, { Component } from "react";
import Tweets from './Tweets';
import Input from '../functions/Input';
import { Redirect } from "react-router";

// i'm gonna change this approach when i see it working
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"];
const years = [1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929,
    1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940,
    1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951,
    1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962,
    1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984,
    1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
    1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
    2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021];

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
        this.onChangeBdayOpt = this.onChangeBdayOpt.bind(this);
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
                birthdate: `${this.state.day} ${this.state.month} ${this.state.year}`,
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

    onChangeBdayOpt(e){
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: `${value}`
        })
    }

    render() {

        const SelectDay = days.map((day, index) => {
                    return (
                        <option key={index} name="day" value={day}>{day}</option>
                    )
                })

        const SelectMonth = months.map((month, index) => {
                        return (
                            <option key={index} name="month" value={month}>{month}</option>  
                        )
                    })

        const SelectYear = years.map((year, index) => {
                        return ( 
                            <option key={index} name="year" value={year}>{year}</option>
                        )
                    }) 
        return(
            <form onSubmit={ this.handleSubmit }>
                <Input label="Name: " htmlFor="name" inputID="name" name="name" value={this.state.name} onChange={ this.onChangeInput } placeholder="Name" type="text" required="required" /> 
                <Input label="Username: " htmlFor="username" inputID="username" name="username" value={ this.state.username } onChange={ this.onChangeInput } placeholder="username" type="text"/>
                <Input label="Email: " htmlFor="email" inputID="email" name="email" value={ this.state.email } onChange={ this.onChangeInput } placeholder="Email" type="text" required="required"/>
                <select name="days" value={this.state.day} id="days" name="day" onChange={ this.onChangeBdayOpt }>
                    {SelectDay}
                </select>
                <select name="months" value={this.state.month} id="months" name="month" onChange={ this.onChangeBdayOpt }>
                   {SelectMonth} 
                </select>
                <select name="years" value={this.state.year} id="years" name="year" onChange={ this.onChangeBdayOpt }>
                   {SelectYear} 
                </select>
                <Input label="Password: " htmlFor="password" inputID="password" name="password_digest" value={this.state.password_digest} onChange={this.onChangeInput} placeholder="Password" type="password" required="required" />
                <Input label="Profile Picture " htmlFor="profile_picture" inputID="profile_picture" name="profile_picture" value={this.state.profile_picture} onChange={ this.onChangeInput } type="file" />
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

export default SignUp;