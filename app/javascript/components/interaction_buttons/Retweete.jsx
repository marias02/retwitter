import React from "react";
import IconLabelButton from "../../functions/IconLabelButton";
import { retweetTweet } from "../../slices/tweetsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { store } from "../../packs/Index";
import { userByUsername } from "../Navbar";

const Retweete = ({ tweet }) => {
    const [retweeted, setRetweeted] = useState(false)
    const current_user = userByUsername(store.getState().login.logginUser.username);
    const ifRetweeted = tweet.retweets.find(user => user.username === current_user.username)
    const dispatch = useDispatch();
    let retweetClass = "retweet";

    if (ifRetweeted != undefined) {
        retweetClass = "unretweet"
    }

    useEffect(() => {
        if (retweeted === true && ifRetweeted === undefined) {
            dispatch(retweetTweet(tweet.id))
        }
    }, [retweeted, dispatch])

    return (
        <IconLabelButton onClick={() => setRetweeted(true)} type="primary" Text={tweet.retweets.length} className={retweetClass} iconClass="fa fa-retweet" />
    )
}

export default Retweete;