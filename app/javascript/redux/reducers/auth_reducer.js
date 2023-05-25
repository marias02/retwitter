const initialState = {
    isLoggedIn: false,
    authUser: {
        name: '', 
        phone: '', 
        email: '', 
        password_digest: '', 
        username: '', 
        profile_picture: '',
        biography: '', 
        birthdate: ``
    }
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_USER': return {
            ...state, 
            isLoggedIn: true,
            authUser: {
                name: action.name,
                phone: action.phone,
                email: action.email,
                password_digest: action.password_digest,
                username: action.username,
                profile_picture: action.profile_picture,
                biography: action.biography,
                birthdate: action.birthdate
            },
        };
        case 'CREATE_USER_ERROR': return {
            isLoggedIn: false,
        };
        default: return state;
    }
};
export default authReducer;