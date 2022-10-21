import React from "react";
import IconLabelButton from "../../functions/IconLabelButton";
import { likeTweet } from "../../slices/tweetsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { store } from "../../packs/Index";
import { userByUsername } from "../Navbar";

const Like = ({ tweet }) => {
    const [liked, setLiked] = useState(false)
    const current_user = userByUsername(store.getState().login.logginUser.username);
    const ifLiked = tweet.likes.find(user => user.username === current_user.username)
    console.log(ifLiked);
    const dispatch = useDispatch();
    let heart = "fa fa-heart-o";
    let heartClass = "like";

    if (ifLiked != undefined) {
        heart = "fa fa-heart"
        heartClass = "dislike"
    }

    useEffect(() => {
        if (liked === true && ifLiked === undefined) {
            heart = "fa fa-heart";
            dispatch(likeTweet(tweet.id))
        }
    }, [liked, dispatch])

    return (
        <IconLabelButton onClick={() => setLiked(true)} type="primary" Text={tweet.likes.length} className={heartClass} iconClass={heart} />
    )
}

export default Like;