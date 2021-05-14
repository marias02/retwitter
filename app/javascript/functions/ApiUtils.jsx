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

export const loginUser = user => {
    fetch('/login_user', {
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

export const logoutUser = () => {
    fetch('/logout_user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "DELETE"
    }).then(response => {
        response.json();
    });
}