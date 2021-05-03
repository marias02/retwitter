import React from "react";

function BirthYear(optionName, selectName, selectValue, selectID, selectOnChange) {
    const yearMax = new Date().getFullYear() - 1;
    const yearMin = yearMax - 120;
    const years = [];

    let selectKey = "";

    if (selectName === "years") {
        selectKey = "0.3"
    }

    for (let i = yearMax; i > yearMin; i--) {
        years.push(<option key={i} name={optionName} value={i}>{i}</option>)
    }

    return (
        <select name={selectName} value={selectValue} id={selectID} onChange={selectOnChange}>
            <option key={selectKey} name={optionName} value="" selected="selected" disabled></option>
            {years}
        </select>
    );
}

export default BirthYear;