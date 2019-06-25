import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BookingIndexContainer from '../bookings/booking index/booking_index_container';
import Footer from '../footer/footer';

const Trips = (props) => {

    return (
        <>
            < NavBarContainer path={props} />
            < BookingIndexContainer path={props} />
            < Footer />
        </>
    )
}

export default Trips;