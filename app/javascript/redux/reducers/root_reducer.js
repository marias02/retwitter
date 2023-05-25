import { combineReducers } from "redux";
import loginReducer from "./login_reducer";
import authReducer from "./auth_reducer";
import tweetsSlice from "../../slices/tweetsSlice";
import usersSlice from "../../slices/usersSlice";

const rootReducer = combineReducers({ login: loginReducer, 
                                    auth: authReducer,
                                    users: usersSlice.reducer,
                                    latestTweetes: tweetsSlice.reducer
                                })

export default rootReducer;