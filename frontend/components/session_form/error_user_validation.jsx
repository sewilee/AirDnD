import React from 'react';
import { merge } from 'lodash';

export const validateUser = (props, formType) => {
    let errors;
    const Email = validateEmail(props.email)
    const Birth = validateBirthday(props.birthday)
    const FName = validateFirstName(props.fname)
    const LName = validateLastName(props.lname)
    const Password = validatePassword(props.password)

    if (formType === "Sign up") errors = merge({}, Email, Birth, FName, LName, Password);
    if (formType === "Log in") errors = merge({}, Email, Password);
    
    return (Object.keys(errors).length) ? errors : null;
};

export const checkErrors = (userError, errorType) => {
    let errors = null;
    if (userError && userError[errorType]) {
        errors = <div className="error-text">{userError[errorType]}</div>
    };
    return errors;
    // (userError && userError[errorType]) ? <li>{userError[errorType]}</li> : null;
};

export const checkClass = (userError, errorType) => {
    let className = "";

    if (userError && userError[errorType]) {
        className = " errors"
    };
    return className;
    // (userError && userError[errorType]) ? "login-items errors" : "login-tems";
};

const validateEmail = (email) => {
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(validEmail) || email === null || email === ""){
        return ({
            email: "Enter a valid email.",
            // errors: true
        })
    }
    return true
};

const validateBirthday = (birthday) => {
    const day = Number(birthday.split("-")[2]);
    const date = new Date(`${birthday} 00:00:00 GMT-05:00`);
    const isValidDate = (Boolean(+date) && date.getDate() === day)

    const validAge = new Date(birthday);
    validAge.setFullYear(validAge.getFullYear() + 18);
    if (birthday === null || birthday === "") return {birthday: "Birthday cannot be blank"};
    if (!isValidDate) return { birthday: "Enter a valid birthday" };
    if (validAge > new Date()) return { birthday: "You must be at least Level 18 to sign up"};

    return true
};

const validateFirstName = (fname) => {
    const regexp = /^[A-Za-z]+$/;
    if(!regexp.test(fname) || fname === null || fname === ""){
        return ({
            fname: "Enter a valid first name",
            // errors: true
        })
    }
    return true
};

const validateLastName = (lname) => {
    const regexp = /^[A-Za-z]+$/;

    if(!regexp.test(lname) || lname === null || lname === ""){
        return ({
            lname: "Enter a valid last name",
            // errors: true
        })
    }
    return true
};

const validatePassword = (password) => {
    if (password.length < 6 || password === null || password === ""){
        return ({
            password: "Enter a valid password",
            // errors: true
        })
    }
    return true
};