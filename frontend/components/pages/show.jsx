import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ListingShowContainer from '../listings/listing_show_container';

const Show = (props) => {
    return (
        <div className="show-page">
            < NavBarContainer path={props}/>
            < ListingShowContainer listing={props}/>
        </div>
    )
}

export default Show;