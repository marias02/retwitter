import React from 'react';

function BirthDay(optionName, selectName, selectValue, selectID, selectOnChange) {
    const days = [];
    let selectKey = "";

    if(selectKey === "days") {
        selectKey = "0.1"
    }

    for(let i = 1; i <= 31; i++){
        days.push(<option key={i} name={optionName} value={i}>{i}</option>)
    }

    return (
        <select name={selectName} value={selectValue} id={selectID} onChange={selectOnChange}>
            <option key={selectKey} name={optionName} value="" selected="selected" disabled></option>
            {days}
            {console.log(selectValue)}
        </select>
    );
}

export default BirthDay;