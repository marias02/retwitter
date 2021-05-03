import React from "react";

function BirthMonth(optionName, selectName, selectValue, selectID, selectOnChange) {
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Nov", "Dec"];
    const months = [];
    let selectKey = "";

    if (selectName === "months") {
        selectKey = "0.2"
    }

    for (let i = 0; i < monthsArr.length; i++) {
        months.push(<option key={i} name={optionName} value={monthsArr[i]}>{monthsArr[i]}</option>)
    }

    return (
        <select name={selectName} value={selectValue} id={selectID} onChange={selectOnChange}>
            <option key={selectKey} name={optionName} value="" selected="selected" disabled></option>
            {months}
        </select>
    );
}

export default BirthMonth;
