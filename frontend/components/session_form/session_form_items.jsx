import React from 'react';
import { checkClass, checkErrors } from './error_user_validation';

export const EmailAddress = (props) => {
    const { email, update, userError } = props;
    
    const className = checkClass(userError, "email");
    const renderError = checkErrors(userError, "email");

    return (
        <>
            <li className={`login-items${className}`}>
                <input type="text"
                    className="login-input"
                    value={email}
                    onChange={update('email')}
                    placeholder="Email address"
                />
                <i className="fas fa-dice-d20"></i>
            </li>
            {renderError}
        </>
    )
};

export const Password = (props) => {
    const { password, update, formType, userError } = props;
    const className = checkClass(userError, "password");
    const renderError = checkErrors(userError, "password");

    let passwordText = "Password";

    if (formType === "Sign up"){
        passwordText = "Create a Password";
    };
    
    return (
        <>
            <li className={`login-items ${className}`}>
                <input type="password"
                    className="login-input"
                    value={ password }
                    onChange={update('password')}
                    placeholder={passwordText}
                    />
                <i className="fas fa-dungeon"></i>
            </li>
            {renderError}
        </>
    );
};

export const FirstName = (props) => {
    const { fname, update, userError } = props;

    const className = checkClass(userError, "fname");
    const renderError = checkErrors(userError, "fname");

    return (
        <>
            <li className={`login-items ${className}`}>
                <input type="text"
                    className="login-input"
                    value={fname}
                    onChange={update("fname")}
                    placeholder="First name"
                />
                <i className="fas fa-dragon"></i>
            </li>
            {renderError}
        </>
    );
};

export const LastName = (props) => {
    const { lname, update, userError } = props;

    const className = checkClass(userError, "lname");
    const renderError = checkErrors(userError, "lname");

    return (
        <>
            <li className={`login-items ${className}`}>
                <input type="text"
                    className="login-input"
                    value={lname}
                    onChange={update("lname")}
                    placeholder="Last name"
                />
                <i className="fas fa-dragon"></i>
            </li>
            {renderError}
        </>
    );
};

export const SignUpLink = (props) => {
    
    const { openModal } = props;
    return (
        <li className="login-footer">
            <p className="login-footer-text">  
                Don’t have an account?
                <span className="signup-link" onClick={() => openModal("signup")}>Sign up</span>
            </p>
        </li>
    );
};

export const LogInLink = (props) => {
    
    const { openModal } = props;
    return (
        <>
            <hr/>
            <li className="login-footer">
                <p className="login-footer-text">
                    Already have an AirD&#38;D account?
                    <span className="signup-link" onClick={() => openModal("login")}>Log in</span>
                </p>
            </li>
        </>
    );
};