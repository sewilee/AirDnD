import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchFrontPage from '../search/search_front_page';

const Splash = (props) => {
    return (
        <div className="splash-page">
            < NavBarContainer page="splash" path={props}/>
            < SearchFrontPage path={props}/>
        </div>
    )
}

export default Splash;