import React from "react";

function IconButton({ onClick, buttonClass, iconClass }){
    return(
        <button onClick={ onClick } className={ `icon_button ${buttonClass}` }>
            <i className={ iconClass } aria-hidden="true" />
        </button> 
    )
}

export default IconButton;