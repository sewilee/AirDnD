import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ListingShowContainer from '../listings/listing_show_container';
import Footer from '../footer/footer';

const Show = (props) => {
    return (
        <div className="show-page">
            < NavBarContainer path={props}/>
            < ListingShowContainer listing={props}/>
            < Footer />
        </div>
    )
}

export default Show;