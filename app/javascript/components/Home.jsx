import React from "react";
import ContainedButton from '../functions/ContainedButton'
import OutlinedButton from '../functions/OutlinedButton'
<<<<<<< HEAD
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
=======

export default () => (
    <div>
        <div className="top_landing_page">
            <div className="left_landing_page">
                <img id="landing_page_background" src="assets/twitter_background.png" />
            </div>
            <div className="right_landing_page">
                <i className="fa fa-twitter"></i>
                <h1 id="landing_page_title">Happening now</h1>
                <h3 id="landing_page_subtitle">Join Retwitter today.</h3>
                <ContainedButton type="link" buttonId="sign_up_landing_page" 
                route="/signup" Text="Sign Up" />
                <OutlinedButton type="link" buttonId="login_landing_page" 
                route="/login" Text="Log in" />
                
            </div>
        </div>
        <div className="footer">
            <p className="footer_landing_page">Retwitter by Maria Arias 2021. Inspired by Twitter. Connect with me on Github.</p>
>>>>>>> 706482d32e735cf040b39b601681d4eeed6500ec
        </div>
    </div>
);