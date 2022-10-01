// import React, { Component } from "react";
// import { connect } from "react-redux";

// class Navbar extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className="navbar">
//                 <ul>
//                     <li>Home</li>
//                     <li>Explore</li>
//                     <li>Notifications</li>
//                     <li>Messages</li>
//                     <li>Bookmarks</li>
//                     <li>Profile</li>
//                     <li>New Tweete</li>
//                     <li>Current User</li>
//                 </ul>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = dispatch => ({
// });

// // export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

// export default Navbar;

import React from "react"
import { Link } from "react-router-dom"
import IconLabelButton from "../functions/IconLabelButton";
import Button from "../functions/ContainedButton";

export default function Navbar() {
    return <nav className="nav">
        {/* <Link to="/home">Twitter Logo</Link>
        <Link to="/home">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to=""></Link> */}
        <IconLabelButton type="link" Text="Home" className="navbar" route="/home" iconClass="fa fa-home" />
        <IconLabelButton type="link" Text="Explore" className="navbar" route="/explore" iconClass="fa fa-hashtag" />
        <IconLabelButton type="link" Text="Notifications" className="navbar" route="/notifications" iconClass="fa fa-bell-o" />
        <IconLabelButton type="link" Text="Messages" className="navbar" route="/messages" iconClass="fa fa-envelope-o" />
        <IconLabelButton type="link" Text="Bookmarks" className="navbar" route="/bookmarks" iconClass="fa fa-bookmark-o" />
        <IconLabelButton type="link" Text="Profile" className="navbar" route="/users/:username" iconClass="fa fa-user-o" />
        <Button type="link" Text="New Tweete" className="navbar" route="/tweetes/new" />
        <li>Current User</li>
    </nav>
}