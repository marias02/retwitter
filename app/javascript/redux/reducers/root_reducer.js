import { combineReducers } from "redux";
import loginReducer from "./login_reducer";
import authReducer from "./auth_reducer";
import { latestTweetesReducer, tweeteReducer, newTweeteReducer, deleteTweeteReducer } from "./tweetes_reducer";

const rootReducer = combineReducers({ login: loginReducer, 
                                    auth: authReducer,
                                    latestTweetes: latestTweetesReducer,
                                    tweeteShow: tweeteReducer,
                                    tweeteNew: newTweeteReducer,
                                    tweeteDel: deleteTweeteReducer
                                })

export default rootReducer;