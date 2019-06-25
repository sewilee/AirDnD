import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ListingIndexContainer from '../listings/listing_index_container';
import Footer from '../footer/footer';

const Landing = (props) => {
    return (
        <>
            < NavBarContainer path={props}/>
            < ListingIndexContainer />
            < Footer />
        </>
    )
}

export default Landing;