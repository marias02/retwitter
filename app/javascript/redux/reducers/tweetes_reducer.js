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

export default latestTweetesReducer;