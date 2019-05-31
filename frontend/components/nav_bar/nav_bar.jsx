import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = (props) => {
    return (
        <nav className="nav-leftside">
            <ul>
                <li className="home-btn">
                    <Link to='/'>&#38;</Link>   
                </li>
                {/* <li className="search-bar"> 
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="Search"/>
                </li> */}
            </ul>
        </nav>
    )
};

const NavBar = (props) => {
    const { currentUser, logout, openModal } = props;
    const becomeAHostButton = (
        <button>Become a host</button>  //place holder
    );
    const helpButton = (
        <button>Help</button>           //place holder
    )

    const loggedOut = () => {
        return (
            <header className="nav-bar">
                <LeftNav />
                <nav className="nav-rightside">
                    <ul>
                        <li className="nav-btn">
                            <div className="nav-service">
                                {becomeAHostButton}
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                {helpButton}
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button onClick={() => openModal("signup")}>Sign up</button>
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button onClick={() => openModal("login")}>Log in</button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };
    
    const loggedIn = () => {
        return (
            <header className="nav-bar">
                <LeftNav />
                <nav className="nav-rightside">
                    <ul>
                        <li className="nav-btn">
                            <div className="nav-service">
                                {becomeAHostButton}
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button>Saved</button>      {/*place holder*/}
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button>Trips</button>   {/*place holder*/}
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                {helpButton}
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button onClick={logout}>Log out</button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };

    if (currentUser){
        return loggedIn(logout);
    } else {
        return loggedOut(openModal);
    }
};

export default NavBar;
