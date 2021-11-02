import React from "react";
import ContainedButton from '../functions/ContainedButton'
import OutlinedButton from '../functions/OutlinedButton'
import IconLabelButton from '../functions/IconLabelButton'
import Tweets from "./Tweets";
import Explore from "./Explore";
import Bookmarks from "./Bookmarks";
import Profile from "./Profile";

export default () => (
    <div id="Home">
        <div className="navbar">
            <i className="fa fa-twitter"></i>
            <IconLabelButton type="link" Text="Home" className="navbar_link" 
            route="/home" iconName="home"></IconLabelButton>
            <IconLabelButton type="link" Text="Explore" className="navbar_link"
            iconName="hashtag"></IconLabelButton>
            <IconLabelButton type="link" Text="Bookmarks" className="navbar_link"
            iconName="bookmark-o"></IconLabelButton>
            <IconLabelButton type="link" Text="Profile" className="navbar_link"
            iconName="user-o"></IconLabelButton>
            {/* Tweete button that activates the new Tweete component */}
            <ContainedButton type="link" Text="Tweete"></ContainedButton>

            <div id="navbar-footer">
                {/* Link to Log the user out */}
               {/* <UserBox username={username} />  */}
            </div>
            
        </div>

        <div className="tweets">
            {/* Add a New Tweete component which can create 
            a new tweet from homepage */}
            <Tweets />
        </div>
        <div className="news_and_people">
            {/* News Preview and People you may know preview */}
        </div>
    </div>
);