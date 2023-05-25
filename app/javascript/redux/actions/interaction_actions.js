import { likeTweete } from "../../functions/InteractionUtils"

const LIKE = "LIKE";
const LIKE_ERROR = "LIKE_ERROR";
const DISLIKE = "DISLIKE";

export const onTweeteLike = id => async(dispatch) => {
    try {
        dispatch({ type: LIKE, ...id });
        await likeTweete(id);
    } catch {
        dispatch({ type: LIKE_ERROR });
    }
}