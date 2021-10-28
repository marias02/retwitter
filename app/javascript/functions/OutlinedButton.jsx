import React from "react";
import { Link } from "react-router-dom";

function OutlinedButton({ onClick, type, Text, className, route, buttonId }) {
    return (
        type === "primary" ? (
            <button className={`outlined_button ${className}`} onClick={onClick}>{Text}</button>
        ) : (
            <Link to={route} >
                <button className={`outlined_button ${className}`} id={buttonId}>
                    {Text}
                </button>
            </Link>
        )
    )


}

export default OutlinedButton;