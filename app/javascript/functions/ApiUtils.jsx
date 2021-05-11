import React from "react";

export const signUpUser = user => {
    await fetch('/signup_user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            data
        })
    }).then(response => {
        response.json();
        this.props.history.push({
            pathname: "/home"
        });
    });
}