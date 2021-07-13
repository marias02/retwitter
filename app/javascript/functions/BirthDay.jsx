import React from 'react';

function BirthDay({ optionName, selectName, selectValue, selectID, onChange }) {
    let days = [];

    days.push(<option name={ optionName } key="0.2" value="" selected disabled></option>)

    for(let i = 1; i <= 31; i++){
        days.push(<option key={ i.toString() } name={ optionName } value={ i.toString() }>{ i.toString() }</option>)
    }

    return (
        <div className="container-birthdate day">
            <span htmlFor={ selectName } className="birthdate day">Day</span>
            <select className="birthdate-selecter day" name={ selectName } value={ selectValue } id={ selectID } onChange={ onChange }>
                { days }
            </select>  
        </div>
        
    );
}

export default BirthDay;