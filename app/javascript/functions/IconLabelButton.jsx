<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

function IconLabelButton({ onClick, iconName, type, Text, className, route, buttonId }) {
    return (
        type === "primary" ? (
            <button className={`icon_label_button ${className}`}
                onClick={onClick} >{Text}</button>
        ) : (
            <Link to={route} >
                <button className={`icon_label_button ${className}`}
                    id={buttonId} >
                    <i className={`fa fa-` + iconName + ` navbar`} aria-hidden="true"></i>
                    {Text}
                </button>
            </Link>
        )
    )


}

export default IconLabelButton;
=======
// This is gonna remain empty until we move forward, until we get to redirect
// the user to the home page, to see how is it going to look like.
>>>>>>> 706482d32e735cf040b39b601681d4eeed6500ec
