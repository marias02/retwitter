import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { likingTweete, retweetingTweete } from "../functions/InteractionUtils";
import { getLatestFollowingTweetes, submitNewTweete } from "../functions/TweetesUtils";

const initialState = {
    tweets: [],
    status: 'idle',
    error: null
}

export const fetchTweets = createAsyncThunk('tweets/fetchTweets', async () => {
    try { 
        const response = await getLatestFollowingTweetes();
        return response;
    } catch (err) {
        return err.message;
    }
})

export const addNewTweet = createAsyncThunk('tweets/addNewTweet', async (initialTweet) => {
    try {
        const response = await submitNewTweete(initialTweet);
        return response;
    } catch (err) {
        return err.message;
    }
})

export const likeTweet = createAsyncThunk('tweet/like', async (initialUser) => {
    try {
        const response = await likingTweete(initialUser);
        return response;
    } catch (err) {
        return err.message;
    }
})

export const retweetTweet = createAsyncThunk('tweet/retweet', async (initialUser) => {
    try {
        const response = await retweetingTweete(initialUser);
        return response;
    } catch (err) {
        return err.message;
    }
})

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers: {
        tweetAdded: {
            reducer(state, action){
                state.tweets.unshift(action.payload.tweet);
            }
            // HERE GOES THE INTERACTION REDUCERS
        },
        tweetLiked: {
            reducer(state, action){
                const tweet = state.tweets.find(tweet => tweet.user_id === action.payload.user.id)
                if (tweet) {
                    tweet.likes.push(action.payload.user)
                }
            }
        },
        tweetRetweeted: {
            reducer(state, action) {
                const tweet = state.tweets.find(tweet => tweet.user_id === action.payload.user.id)
                if (tweet) {
                    tweet.retweets.push(action.payload.user)
                }
            }
        }
    },
    extraReducers(builder) {
        builder 
            .addCase(fetchTweets.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTweets.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedTweets = action.payload.map(tweet => {
                    return tweet;
                })

                state.tweets = state.tweets.concat(loadedTweets);
            })
            .addCase(fetchTweets.rejected, (state, action) => {
                state.status = 'failed',
                state.error = action.error.message
            })
            .addCase(addNewTweet.fulfilled, (state, action) => {
                state.tweets.unshift(action.payload.tweet)
            })
            .addCase(likeTweet.fulfilled, (state, action) => {
                if (typeof action.payload != "string") {
                    const { tweet, user } = action.payload;
                    const loadedTweete = state.tweets.find(tweete => tweete.id === tweet.id)
                    if (user && loadedTweete){
                        loadedTweete.likes.push(user);
                    }
                }
            })
            .addCase(retweetTweet.fulfilled, (state, action) => {
                if (typeof action.payload != "string") {
                    const { tweet, user } = action.payload;
                    const loadedTweete = state.tweets.find(tweete => tweete.id === tweet.id)
                    if (user && loadedTweete) {
                        loadedTweete.retweets.push(user);
                    }
                }
            })
    }
})

export const selectAllTweets = (state) => state.latestTweetes.tweets;
export const getTweetStatus = (state) => state.latestTweetes.status;
export const getTweetError = (state) => state.latestTweetes.error;
export const { tweetAdded } = tweetsSlice.actions;
export default tweetsSlice;