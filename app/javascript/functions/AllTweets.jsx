import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TweetsExcerpt from "../components/TweetsExcerpt";
import { fetchUsers, getUserStatus, selectAllUsers, selectById, selectUserById } from "../slices/usersSlice";
import { selectAllTweets, getTweetStatus, getTweetError, fetchTweets } from "../slices/tweetsSlice";
import { store } from "../packs/Index";

export function User(event, userId){
    const user = useSelector(state => selectUserById(state, userId))
    return user;
}

const TweetsList = () => {
    const dispatch = useDispatch();
    const tweets = useSelector(selectAllTweets)
    const users = useSelector(selectAllUsers)
    const tweetStatus = useSelector(getTweetStatus)
    const tweetError = useSelector(getTweetError)

    useEffect(() => {
        if (tweetStatus === "idle"){
            dispatch(fetchTweets())
        }
    }, [tweetStatus, dispatch])

    // let user = TweetAuthor();
    // console.log(users)
    let content;
    if (tweetStatus === "loading"){
        content = <p>Loading...</p>
    } else if (tweetStatus === "succeeded") {
        content = tweets.map(tweet => <TweetsExcerpt key={ tweet.id } tweet={ tweet } />)
    } else if (tweetStatus === "failed") {
        content = <p>{error}</p>
    }

    return(
        <ul className="feed-list">
           { content } 
        </ul>
    )
}

export { TweetsList }