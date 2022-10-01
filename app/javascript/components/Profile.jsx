import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: false
        }
    }

    async componentDidMount() {
        const { downloadUser } = this.props;
        await downloadUser(this.props.match.params.username);
    }

    render(){
        const { user } = this.props.user ;
        
    }
}