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
        if (response.status === 204 || response.status === 200){
            redirect.push({
                pathname: "/home", 
                state: {cur_usr_username: user.username}
            })
        };
    });
}

export const loginUser = (user, redirect) => {
    fetch('/login_user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    }).then(response => {
        response.json();
        if(response.status === 204 || response.status === 200){
            redirect.push({
                pathname: "/home",
                state: {cur_usr_username: user.username}
            })
        };
    });
}

export const logoutUser = redirect => {
    fetch('/logout_user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "DELETE"
    }).then(response => {
        response.json();
        if(response.status === 204 || response.status === 200){
            redirect.push("/")
        };
    });
}