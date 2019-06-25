import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ListingFilter from '../listings/listing_filtered';
import Footer from '../footer/footer';

const Filtered = (props) => {
    return (
        <div className="index-page">
            < NavBarContainer path={props}/>
            <div className="filtered-page">
                < ListingFilter />
            </div>
            < Footer />
        </div>
    )
}

export default Filtered;