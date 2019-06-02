import React from 'react';
import { merge } from 'lodash';

const UserDropdown = (props) => {
    const { logout, closeAllDropdown } = props;

    const onClick = (e) => {
        // debugger
        closeAllDropdown();
        logout();
    }
    // debugger
    return (
        <div className="user-dropdown">
            <ul>
                <li className="user-dropdown-btn">
                    <button onClick={onClick}>
                        <div className="user-btn-text">
                            Log Out
                        </div>
                    </button>
                </li>
                {/* <li className="user-dropdown-btn">
                    <button>
                        <div className="user-btn-text">
                             click click   
                        </div>
                    </button>
                </li> */}
            </ul>
        </div>
    )
};

export default UserDropdown;