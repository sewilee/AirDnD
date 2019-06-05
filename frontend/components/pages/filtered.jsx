import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ListingFilterContainer from '../listings/listing_filtered';
import ListingMap from '../map/listing_map';

const Filtered = (props) => {
    return (
        <div className="index-page">
            < NavBarContainer />
            <div className="filtered-page">
                < ListingFilterContainer />
                <div className="filtered-map">
                    < ListingMap />
                </div>
            </div>
        </div>
    )
}

export default Filtered;