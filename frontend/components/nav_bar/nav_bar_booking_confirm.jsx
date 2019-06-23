import React from 'react';
import { Link } from 'react-router-dom';

const NavBarBooking = (props) => {
    const pathType = props.path.split("")
    let classNavBar = "nav-bar-book v1";
    return (
        <header className={`nav-bar`}>
            <nav className="nav-leftside">
                <ul>
                    <li className="home-btn">
                        <Link to='/listings'><img src={window.logo_red} /></Link>
                    </li>
                </ul>
            </nav>
            <nav className="nav-bookings">
                {/* <ul>
                    <li className="navBar-book">
                        1. Review house rules
                    </li>
                    <li className="navBar-book">
                        <i className="fas fa-dragon"></i>
                    </li>
                    <li className="navBar-book">
                        2. Party Size
                    </li>
                    <li className="navBar-book">
                        <i className="fas fa-dragon"></i>
                    </li>
                    <li className="navBar-book">
                        3. Confirm and play
                    </li>
                </ul> */}
            </nav>
        </header>
    )
};

export default NavBarBooking;