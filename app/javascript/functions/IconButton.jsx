import React from "react";

function IconButton({ onClick, buttonClass, iconClass, buttonType, onChange }){
    if (buttonType == "image"){
        return(
            <button onClick={ onClick } className={ `icon_button ${buttonClass}` }>
                <i className={ iconClass } aria-hidden="true" />
                <input type="file" accept="image/*" multiple={true} onChange={onChange} />
            </button> 
        )
    } else {
        return(
            <button onClick={ onClick } className={ `icon_button ${buttonClass}` }>
                <i className={ iconClass } aria-hidden="true" />
            </button> 
        )
    }
    
}

export default IconButton;