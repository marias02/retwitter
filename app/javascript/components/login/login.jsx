import React, { Component } from "react";
import Input from '../../functions/Input';
import ContainedButton from '../../functions/ContainedButton'
import { Link, Redirect } from 'react-router-dom';
import { loginUserPage } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password_digest: '',
            failedLogin: false
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFailedLogin = this.handleFailedLogin.bind(this);
    }

    handleFailedLogin(boolean){
        this.setState({ failedLogin: boolean})
    }

    onChangeInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const { username, password_digest } = this.state;
        const { logginUser, user } = this.props;

        await logginUser({ username, password_digest });
    }

    render(){
        return(
            <div id="login_container">
                {this.props.user.isLoggedIn ? <Redirect to="/home" redirect="true" /> : null }
                <i className="fa fa-twitter login" />
                <h2>Log In on Retwitter</h2>
                <Input label="Username" labelClass="form_label" 
                inputID="username" inputClass="form_field" name="username" 
                value={ this.state.username } onChange={ this.onChangeInput }
                type="text" required="true" style="login" />
                <Input label="Password" labelClass="form_label"
                inputID="password" inputClass="form_field" name="password_digest" 
                onChange={ this.onChangeInput } type="password" required="true"
                value={ this.state.password_digest } style="login" />
                <ContainedButton className="login_submit" type="primary" 
                Text="Log In" onClick={ this.handleSubmit } />
                <br/>
                <Link to="/signup">Sign Up on Retwitter</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.login,
});

const mapDispatchToProps = dispatch => ({
    logginUser: estate => dispatch(loginUserPage(estate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);