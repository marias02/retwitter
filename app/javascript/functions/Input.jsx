import React from "react";

function Input({ label, labelClass, inputID, inputClass, name, value, onChange, 
    type, required, readOnly, style }) {
    return (
        required === "true" && readOnly === "true" ? (
            <div className={`container ${style}`}>
                <input type={type} id={inputID} className={inputClass} 
                name={name} value={value} onChange={ onChange } required={ true } 
                readOnly={ true } />
                <span className={labelClass}>{label}</span>
            </div>
         ) : required === "true" ? (
            <div className={`container ${style}`}>
                <input type={type} id={inputID} className={inputClass}
                    name={name} value={value} onChange={onChange} 
                    required={ true } />
                <span className={labelClass}>{label}</span>
            </div>
        ) : readOnly === "true" ? (
            <div className={`container ${style}`}>
                <input type={type} id={inputID} className={inputClass}
                    name={name} value={value} onChange={onChange} 
                    readOnly={ true } />
                <span className={labelClass}>{label}</span>
            </div>
        ) : (
            <div className={`container ${style}`}>
                <input type={type} id={inputID} className={inputClass}
                    name={name} value={value} onChange={onChange} />
                <span className={labelClass}>{label}</span>
            </div>
        )
    )
}

export default Input;