import React from 'react';
import { merge } from 'lodash';

export const validateUser = (props, formType) => {
    // const errors = { errors: false }
    const Email = validateEmail(props.email)
    const Birth = validateBirthday(props.birthday)
    const FName = validateFirstName(props.fname)
    const LName = validateLastName(props.lname)
    const Password = validatePassword(props.password)

    if (formType === "Sign up") return merge({}, Email, Birth, FName, LName, Password);
    if (formType === "Log in") return merge({}, Email, Password);
    return null;
};

export const checkErrors = (userError, errorType) => {
    let errors = null;
    if (userError && userError[errorType]) {
        errors = <li>{userError[errorType]}</li>
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
    const day = birthday.split("-")[2];
    const date = new Date(birthday);
    const isValidDate = (Boolean(+date) && date.getDate() == day)

    if(!isValidDate || birthday === null || birthday === ""){
        return ({
            birthday: "Enter a valid birthday",
            // errors: true
        })
    }
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
    // debugger
    if (password.length < 6 || password === null || password === ""){
        // debugger
        return ({
            password: "Enter a valid password",
            // errors: true
        })
    }
    return true
};