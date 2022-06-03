const initialState = {
    isLoggedIn: false,
    logginUser: {
        username: '',
        password_digest: ''
    }
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_USER': return {
            ...state,
            isLoggedIn: true,
            logginUser: {
                username: action.username,
                password_digest: action.password_digest
            },
        };
        case 'LOGIN_USER_ERROR': return {
            isLoggedIn: false
        };
        default: return state;
    }
}

export default loginReducer;