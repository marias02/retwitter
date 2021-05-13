import React from "react";

export const signUpUser = user => {
    fetch('/signup_user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    }).then(response => {
        response.json();
    });
}