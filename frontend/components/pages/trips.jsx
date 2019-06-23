import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BookingIndexContainer from '../bookings/booking index/booking_index_container';

const Trips = (props) => {

    return (
        <div className="trips-page">
            < NavBarContainer path={props} />
            < BookingIndexContainer path={props} />
        </div>
    )
}

export default Trips;