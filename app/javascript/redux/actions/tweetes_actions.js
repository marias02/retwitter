import { getLatestFollowingTweetes } from "../../functions/TweetesUtils";
import { getTweete } from "../../functions/TweetesUtils";
import { submitNewTweete } from "../../functions/TweetesUtils";
import { deleteTweete } from "../../functions/TweetesUtils";

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

const GET_TWEETE = "GET_TWEETE";
const GET_TWEETE_ERROR = "GET_TWEETE_ERROR";

const getTweeteRequest = (id) => dispatch => {
    try {
        getTweete(id).then(tweete => {
            dispatch({ type: GET_TWEETE, payload: tweete });
        })
    } catch (e) {
        console.error(e);
        dispatch({ type: GET_TWEETE_ERROR })
    }

}

export { getTweeteRequest }

const CREATE_TWEETE = "CREATE_TWEETE";
const CREATE_TWEETE_ERROR = "CREATE_TWEETE_ERROR";

const createTweete = (newTweete) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_TWEETE, ...newTweete });
        await submitNewTweete(newTweete);
    } catch (e) {
        console.error(e);
        dispatch({ type: CREATE_TWEETE_ERROR })
    }

}

export { createTweete }

const DELETE_TWEETE = "DELETE_TWEETE";
const DELETE_TWEETE_ERROR = "DELETE_TWEETE_ERROR";

const destroyTweete = (id) => async (dispatch) => {
    try {
        console.log("helo");
        dispatch({ type: DELETE_TWEETE, ...id });
        await deleteTweete(id);
    } catch (e) {
        console.error(e);
        dispatch({ type: DELETE_TWEETE_ERROR });
    }
}

export { destroyTweete }