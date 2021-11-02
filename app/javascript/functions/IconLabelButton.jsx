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