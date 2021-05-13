import React, { Component } from "react";
import logoutUser from '../functions/ApiUtils';

class LogOut extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const logoutbutton = `Log Out ${this.props.username}`
        return(
            <div>
                <button onClick={logoutUser}>Log Out {this.props.username}</button>
            </div>
        );
    }
}

export default LogOut;