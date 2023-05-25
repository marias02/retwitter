// import { getLatestFollowingTweetes } from "../../functions/TweetesUtils";
import { getTweete, deleteTweete } from "../../functions/TweetesUtils";

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