import React from 'react';

export const EmailAddress = (props) => {
    const { email, update } = props;
    return (
        <li className="login-items">
            <input type="text"
                className="login-input"
                value={email}
                onChange={update('email')}
                placeholder="Email address"
            />
            <i className="fas fa-dice-d20"></i>
        </li>
    )
};

export const Password = (props) => {
    const { password, update, formType } = props;
    let passwordText = "Password"
    if (formType === "Sign Up"){
        passwordText = "Create a Password";
    }
    return (
        <li className="login-items">
            <input type="password"
                className="login-input"
                value={ password }
                onChange={update('password')}
                placeholder={passwordText}
            />
            <i className="fas fa-dungeon"></i>
        </li>
    )
};

export const FirstName = (props) => {
    const { fname, update } = props;
    return (
        <li className="login-items">
            <input type="text"
                className="login-input"
                value={fname}
                onChange={update("fname")}
                placeholder="First name"
            />
            <i className="fas fa-dragon"></i>
        </li>
    );
};

export const LastName = (props) => {
    const { lname, update } = props;
    return (
        <li className="login-items">
            <input type="text"
                className="login-input"
                value={lname}
                onChange={update("lname")}
                placeholder="Last name"
            />
            <i className="fas fa-dragon"></i>
        </li>
    );
};

export const SignUpLink = (props) => {
    
    const { openModal } = props;
    return (
        <li className="login-items">
            <p>
                Don’t have an account?
                <span className="signup-link" onClick={() => openModal("signup")}>Sign up</span>
            </p>
        </li>
    );
};

export const LogInLink = (props) => {
    
    const { openModal } = props;
    return (
        <li className="login-items">
            <p>
                Already have an AirD&#38;D account?
            <span className="signup-link" onClick={() => openModal("login")}>Log in</span>
            </p>
        </li>
    );
};