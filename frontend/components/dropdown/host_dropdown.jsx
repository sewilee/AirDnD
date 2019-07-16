import React from 'react';
import { merge } from 'lodash';

const HostDropdown = (props) => {

    return (
        <div className="host-dropdown">
            <ul>
                <li className="host-dropdown-btn">
                    <div className="host-dropdown-div">
                        <h2>Host your own campaign</h2>
                        <p className="host-dropdown-text">
                            "Get your d6's ready, because you're going to need a lot of them."
                        </p>
                        <p className="host-dropdown-text">
                            The power of creating worlds, controlling deities and dragons,
                            and leading entire nations is in your hands. You are the master
                            of the game -the rules, the setting, the action and ultimately,
                            the fun. This is a great deal of power, and you must use it wisely.
                        </p>
                        <p className="host-dropdown-text source">-Dungeon Master Guild</p>
                    </div>
                </li>
                {/* <li className="host-dropdown-btn">
                </li> */}
            </ul>
        </div>
    )
};

export default HostDropdown;