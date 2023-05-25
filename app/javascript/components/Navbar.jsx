import React from "react"
import { Link } from "react-router-dom"
import IconLabelButton from "../functions/IconLabelButton";
import Button from "../functions/ContainedButton";
import { User } from "../functions/AllTweets";
import { store } from "../packs/Index";
import { useSelector } from "react-redux";
import { selectUserByUsername } from "../slices/usersSlice";

export function userByUsername(username){
    const user = useSelector(state => selectUserByUsername(state, username))
    return user;
}

export default function Navbar() {
    const current_user_username = store.getState().login.logginUser.username;
    const current_user = userByUsername(current_user_username)
    return <nav className="nav">
        <IconLabelButton type="link" Text="Home" className="navbar" route="/home" iconClass="fa fa-home" />
        <IconLabelButton type="link" Text="Explore" className="navbar" route="/explore" iconClass="fa fa-hashtag" />
        <IconLabelButton type="link" Text="Notifications" className="navbar" route="/notifications" iconClass="fa fa-bell-o" />
        <IconLabelButton type="link" Text="Messages" className="navbar" route="/messages" iconClass="fa fa-envelope-o" />
        <IconLabelButton type="link" Text="Bookmarks" className="navbar" route="/bookmarks" iconClass="fa fa-bookmark-o" />
        <IconLabelButton type="link" Text="Profile" className="navbar" route="/users/:username" iconClass="fa fa-user-o" />
        <Button type="link" Text="New Tweete" className="navbar" route="/tweetes/new" />
        <div id="current_user">
            <span>{current_user.name}</span>
            <span>{current_user.username}</span>
        </div>
    </nav>
}