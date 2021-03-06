import React from 'react';
import { checkClass, checkErrors } from './error_user_validation';


function range (start, end){
    const arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i)
    }
    return arr;
}

const currentYear = new Date().getFullYear();
const months = range(1, 12);
const days = range(1, 31);
const years = range(currentYear - 200, currentYear).reverse();
const dndMonths = {
    1: "Hammer",
    2: "Alturiak",
    3: "Ches",
    4: "Tarsakh",
    5: "Mirtul",
    6: "Kythorn",
    7: "Flamerule",
    8: "Eleasis",
    9: "Eleint",
    10: "Marpenoth",
    11: "Uktar",
    12: "Nightal",
};

const Birthday = (props) => {
    const className = checkClass(props.userError, "birthday");
    const renderError = checkErrors(props.userError, "birthday");

    const { handleBirthday, birthday } = props;

    const birthDay = days.map( day => {
        if(day < 10){
            return <option key={day} value={day}>{`0${day}`}</option>
        } else {
            return <option key={day} value={day}>{day}</option>
        }
    });
    
    const birthMonth = months.map( month => {
        if(month < 10){
            return <option key={month} value={month} >{`0${month}`}: {dndMonths[month]}</option>
        } else {
            return <option key={month} value={month} >{month}: {dndMonths[month]}</option>
        }
    });
    
    const birthYear = years.map( year => {
        return <option key={year} value={year} >{year}</option>
    });

    let birthArr = birthday.split("-")

    if (birthArr.length < 3){
        for(let i = birthArr.length; i < 3; i++){
            birthArr.push("");
        }
    }
    
    return (
        <>
            <div className="login-birthday">
                <div className={`login-birthday-pulldown ${className}`}>
                    <select className="login-birthday-input" onChange={handleBirthday("month")} value={birthArr[1]}>
                        <option value="" disabled>Month</option>
                        {birthMonth}
                    </select>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className={`login-birthday-pulldown ${className}`}>
                    <select className="login-birthday-input" onChange={handleBirthday("day")} value={birthArr[2]}>
                        <option value="" disabled>Day</option>
                        {birthDay}
                    </select>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className={`login-birthday-pulldown ${className}`}>
                    <select className="login-birthday-input" onChange={handleBirthday("year")} value={birthArr[0]}>
                        <option value="" disabled>Year</option>
                        {birthYear}
                    </select>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            { renderError }
        </>
    )
}

export default Birthday;

