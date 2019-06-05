import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ListingIndexContainer from '../listings/listing_index_container';

const Landing = (props) => {
    return (
        <>
            < NavBarContainer path={props}/>
            < ListingIndexContainer />
        </>
    )
}

export default Landing;