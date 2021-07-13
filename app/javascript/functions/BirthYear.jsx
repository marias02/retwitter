import React from "react";

function BirthYear({ optionName, selectName, selectValue, selectID, onChange }) {
    const yearMax = new Date().getFullYear() - 1;
    const yearMin = yearMax - 120;
    let years = [];

    years.push(<option name={optionName} key="0.3" selected value="" disabled></option>);

    for (let i = yearMax; i > yearMin; i--) {
        years.push(<option key={i.toString()} name={optionName} value={`${i}`}>{i}</option>)
    }

    return (
        <div className="container-birthdate year">
            <span htmlFor={selectName} className="birthdate year">Year</span>
            <select className="birthdate-selecter year" name={selectName} id={selectID} onChange={ onChange }>
                {years}
            </select> 
        </div>
        
    );
}

export default BirthYear;