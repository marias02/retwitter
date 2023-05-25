import React from "react";
import { Link } from "react-router-dom";

function IconLabelButton({ onClick, type, Text, className, route, buttonId, iconClass }) {
    return (
        type === "primary" ? (
            <button className={`contained_label_button ${className}`}
                onClick={onClick} > <i className={iconClass} aria-hidden="true"></i> {Text}</button>
        ) : (
            <Link to={route} >
                <button className={`contained_label_button ${className}`}
                    id={buttonId} >
                    <i className={iconClass} aria-hidden="true" />
                     {Text}
                </button>
            </Link>
        )
    )


}

export default IconLabelButton;