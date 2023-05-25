import React from "react";

function Input({ label, labelClass, inputID, inputClass, name, value, onChange, type, required }) {
    if (required === "true"){
        return (
            <div className="container">
                <input type={type} id={inputID} className={inputClass} name={name} value={value} onChange={ onChange } required />
                <span className={labelClass}>{label}</span>
            </div>
        )  
    } else {
        return (
            <div className="container">
                <input type={type} id={inputID} className={inputClass} name={name} value={value} onChange={onChange} />
                <span className={labelClass}>{label}</span>
            </div>
        )
    }
   
}

export default Input;