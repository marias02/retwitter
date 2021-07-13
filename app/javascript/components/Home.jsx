import React from "react";
import { Link } from "react-router-dom";

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
                <Link className="button" id="sign_up_landing_page" to="/signup">Sign up</Link>
                <Link className="button" id="login_landing_page" to="/login">Log in</Link>
            </div>
        </div>
        <div className="footer">
            <p className="footer_landing_page">Retwitter by Maria Arias 2021. Inspired by Twitter. Connect with me on Github.</p>
        </div>
    </div>
);