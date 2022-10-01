const initialState = {
    tweetesDownloaded: false,
    tweetes: []
};

const latestTweetesReducer = ( state = initialState, action ) => {
    switch(action.type){
        case "GET_LATEST_TWEETES": return {
            tweetesDownloaded: true,
            tweetes: action.payload
        };
        case "GET_LATEST_TWEETES_ERROR": return {
            tweetesDownloaded: false
        };
        default: return state
    }
}

export { latestTweetesReducer };

const initialTweeteState = {
    tweeteDownloaded: false,
    tweete: {}
};

const tweeteReducer = (state = initialTweeteState, action) => {
    switch (action.type) {
        case "GET_TWEETE": return {
            tweeteDownloaded: true,
            tweete: action.payload,
        };
        case "GET_TWEETE_ERROR": return {
            tweeteDownloaded: false
        };
        default: return state
    }
}

export { tweeteReducer };

const initialNewTweeteState = {
    newTweete: {
        text: '',
        media: null
    },
    tweeteCreated: false
};

const newTweeteReducer = (state = initialNewTweeteState, action) => {
    switch (action.type) {
        case "CREATE_TWEETE": return {
            ...state,
            newTweete: { 
                text: action.text,
                media: action.media
            },
            tweeteCreated: true
        };
        case "CREATE_TWEETE_ERROR": return {
            tweeteCreated: false
        };
        default: return state
    }
}

export { newTweeteReducer };

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
            tweeteDeleted: false
        };
        default: return state
    }
}

export { deleteTweeteReducer };