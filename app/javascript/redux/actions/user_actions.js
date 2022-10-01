import { getUser } from "../../functions/UserUtils";

const GET_USER = "GET_USER";
const GET_USER_ERROR = "GET_USER_ERROR";

const showUser = (username) => dispatch => {
    try {
        getUser(username).then(user => {
            dispatch({ type: GET_USER, payload: user });
        });
    } catch (e) {
        console.error(e);
        dispatch({ type: GET_USER_ERROR })
    }
}

export { showUser }