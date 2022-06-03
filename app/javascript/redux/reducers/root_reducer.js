import { combineReducers } from "redux";
import loginReducer from "./login_reducer";
import authReducer from "./auth_reducer";
import latestTweetesReducer from "./tweetes_reducer";

const rootReducer = combineReducers({ login: loginReducer, 
                                    auth: authReducer,
                                    latestTweetes: latestTweetesReducer
                                })

export default rootReducer;