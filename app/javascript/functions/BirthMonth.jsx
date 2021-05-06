import React from "react";

function BirthMonth({ optionName, selectName, selectValue, selectID, onChange }) {
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"];
    let months = [];

    months.push(<option name={optionName} key="0.1" value="" selected disabled></option>)

    for (let i = 0; i < monthsArr.length; i++) {
        months.push(<option key={i.toString()} name={optionName} value={monthsArr[i]}>{monthsArr[i]}</option>)
    }

    return (
        <select name={selectName} value={selectValue} id={selectID} onChange={ onChange }>
            {months}
        </select>
    );
}

export default BirthMonth;
