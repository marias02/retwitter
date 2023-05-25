const initialTweeteState = {
    tweeteDownloaded: false,
    tweete: {}
};

const tweeteReducer = (state = initialTweeteState, action) => {
    switch (action.type) {
        case "GET_TWEETE": return {
            ...state,
            tweeteDownloaded: true,
            tweete: action.payload,
        };
        case "GET_TWEETE_ERROR": return {
            ...state,
            tweeteDownloaded: false
        };
        default: return state
    }
}

export { tweeteReducer };

const initialdelTweeteState = {
    tweeteDeleted: false 
}

const deleteTweeteReducer = (state = initialdelTweeteState, action) => {
    switch (action.type) {
        case "DELETE_TWEETE": return {
            ...state,
            tweeteDeleted: true
        };
        case "DELETE_TWEETE_ERROR": return {
            ...state,
            tweeteDeleted: false
        };
        default: return state
    }
}

export { deleteTweeteReducer };