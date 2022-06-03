import { getLatestFollowingTweetes } from "../../functions/TweetesUtils";

const GET_LATEST_TWEETES = "GET_LATEST_TWEETES";
const GET_LATEST_TWEETES_ERROR = "GET_LATEST_TWEETES_ERROR";

const getLatestTweetes = () => dispatch => {
    try {
        getLatestFollowingTweetes().then(tweetes => {
            dispatch({type: GET_LATEST_TWEETES, payload: tweetes});
        }) 
    } catch (e) {
        console.error(e);
        dispatch({type: GET_LATEST_TWEETES_ERROR})
    }
    
}

export { getLatestTweetes }