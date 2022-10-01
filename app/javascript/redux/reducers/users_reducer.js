const initialGetUserState = {
    userDownloaded: false,
    user: {}
}

const getUserReducer = (state = initialGetUserState, action) => {
    switch(action.type){
        case "GET_TWEETE": return {
            userDownloaded: true,
            user: action.payload
        };
        case "GET_TWEETE_ERROR": return {
            userDownloaded: false
        };
        default: return state
    }
}

export { getUserReducer };