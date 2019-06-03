import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ListingIndexContainer from '../listings/listing_index_container';

const Landing = (props) => {
    return (
        <div className="landing-page">
            < NavBarContainer />
            < ListingIndexContainer />
        </div>
    )
}

export default Landing;