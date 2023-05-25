import React from "react";

function IconButton({ onClick, buttonClass, iconClass, buttonType, onChange }){
    return (
        buttonType == "image" ? (
            <button onClick={ onClick } className={ `icon_button ${buttonClass}` }>
                 <i className={ iconClass } aria-hidden="true" />
                 <input type="file" accept="image/*" onChange={onChange} />
            </button> 
        ) : (
            <button onClick={ onClick } className={ `icon_button ${buttonClass}` }>
                <i className={ iconClass } aria-hidden="true" />
            </button> 
        )
    )
    
}

export default IconButton;