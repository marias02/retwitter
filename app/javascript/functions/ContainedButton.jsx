import React from "react";
import { Link } from "react-router-dom";

function Button({ onClick, type, Text, className, route, buttonId }) {
    return (
        type === "primary" ? (
            <button className={`contained_button ${ className }`} 
            onClick={ onClick } >{ Text }</button>
        ) : (
            <Link to={ route } >
                <button className={`contained_button ${ className }`} 
                id={ buttonId } >
                    { Text }
                </button> 
            </Link>
        ) 
    )

    
}

export default Button;