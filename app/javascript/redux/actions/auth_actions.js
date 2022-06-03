import { signUpUser } from "../../functions/ApiUtils";
import { loginUser } from "../../functions/ApiUtils";

const CREATE_USER = "CREATE_USER";
const CREATE_USER_ERROR = "CREATE_USER_ERROR";
const LOGIN_USER = "LOGIN_USER";
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

const createUser = newUser => async (dispatch) => {
    try {
        dispatch({ type: CREATE_USER, ...newUser });
        await signUpUser(newUser);
    } catch {
        dispatch({ type: CREATE_USER_ERROR });
    }
}

export { createUser }

const loginUserPage = user => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_USER, ...user });
        await loginUser(user);
    } catch {
        dispatch({type: LOGIN_USER_ERROR })
    }
}

export { loginUserPage }