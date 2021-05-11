import React from "react";
import { Redirect } from 'react-router-dom';

export const signUpUser = (user, redirect) => {
    fetch('/signup_user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    }).then(response => {
        response.json();
        if (response.status === 204){
            redirect.push({
                pathname: "/home", 
                state: {cur_usr_username: user.username}
            })
        };
    });
}