import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchFrontPage from '../search/search_front_page';
import Footer from '../footer/footer';

const Splash = (props) => {
    return (
        <div className="splash-page">
            < NavBarContainer page="splash" path={props}/>
            < SearchFrontPage path={props}/>
            < Footer page="splash"/>
        </div>
    )
}

export default Splash;