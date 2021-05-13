import React from "react";

function Input({ label, htmlFor, inputID, name, value, onChange, placeholder, type, required }) {
    return (
        <div>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} id={inputID} name={name} value={value} onChange={ onChange } placeholder={placeholder} required={required} />
        </div>
    )
}

export default Input;