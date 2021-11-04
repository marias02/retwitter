import React from "react";

function Input({ label, labelClass, inputID, inputClass, name, value, onChange, 
<<<<<<< HEAD
    type, required, readOnly, style }) {
    return (
        required === "true" && readOnly === "true" ? (
            <div className={`container ${style}`}>
=======
    type, required, readOnly }) {
    return (
        required === "true" && readOnly === "true" ? (
            <div className="container">
>>>>>>> 706482d32e735cf040b39b601681d4eeed6500ec
                <input type={type} id={inputID} className={inputClass} 
                name={name} value={value} onChange={ onChange } required={ true } 
                readOnly={ true } />
                <span className={labelClass}>{label}</span>
            </div>
         ) : required === "true" ? (
<<<<<<< HEAD
            <div className={`container ${style}`}>
=======
            <div className="container">
>>>>>>> 706482d32e735cf040b39b601681d4eeed6500ec
                <input type={type} id={inputID} className={inputClass}
                    name={name} value={value} onChange={onChange} 
                    required={ true } />
                <span className={labelClass}>{label}</span>
            </div>
        ) : readOnly === "true" ? (
<<<<<<< HEAD
            <div className={`container ${style}`}>
=======
            <div className="container">
>>>>>>> 706482d32e735cf040b39b601681d4eeed6500ec
                <input type={type} id={inputID} className={inputClass}
                    name={name} value={value} onChange={onChange} 
                    readOnly={ true } />
                <span className={labelClass}>{label}</span>
            </div>
        ) : (
<<<<<<< HEAD
            <div className={`container ${style}`}>
=======
            <div className="container">
>>>>>>> 706482d32e735cf040b39b601681d4eeed6500ec
                <input type={type} id={inputID} className={inputClass}
                    name={name} value={value} onChange={onChange} />
                <span className={labelClass}>{label}</span>
            </div>
        )
    )
}

export default Input;