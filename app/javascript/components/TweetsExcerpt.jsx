import React from "react";
import IconLabelButton from "../functions/IconLabelButton";
import IconButton from "../functions/IconButton";
import { User } from "../functions/AllTweets";
import Like from "./interaction_buttons/Like";
import Retweete from "./interaction_buttons/Retweete";

const TweetsExcerpt = ({tweet}) => {
    let user = User('', tweet.user_id)
    return (
        <li className="tweete-container">
            {/* <Link to={"/tweetes/" + tweet.id} id={tweet.id}> */}
                <div className="tweete">
                    <div className="tweete-left-side">
                        <img className="prof-cont" src={"https:images.pexels.com/photos/354951/pexels-photo-354951.jpeg?cs=srgb&dl=pexels-pixabay-354951.jpg&fm=jpg"} />
                    </div>
                    <div className="tweete-right-side">
                        <div className="top-tweete">
                            <span>{user.name} @{user.username}</span>
                        </div>
                        <div className="tweete-content">
                            <span>{tweet.text}</span>
                            {tweet.media_url != null ? <img className="tweete_media" src={tweet.media_url} /> : <p>no image to show</p>}
                        </div>
                        <div className="button-tools">
                            <IconLabelButton type="primary" Text={0} className="comment" iconClass="fa fa-comment-o" />
                            <Retweete tweet={tweet}></Retweete>
                            <Like tweet={tweet}></Like>
                            {/* <IconLabelButton onClick={() => setRetweeted(true)} type="primary" Text={tweet.retweets.length} className={retweetClass} iconClass="fa fa-retweet" />
                            <IconLabelButton onClick={() => setLiked(true)} type="primary" Text={tweet.likes.length} className={heartClass} iconClass={heart} /> */}
                            <IconButton buttonClass="share" iconClass="fa fa-upload" />
                        </div>
                    </div>
                </div>
            {/* </Link> */}
        </li>
    )
}

export default TweetsExcerpt;