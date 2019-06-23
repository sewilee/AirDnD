import React from 'react';
import NavBarBooking from '../nav_bar/nav_bar_booking_confirm';
import BookingV1 from '../bookings/booking confirmation/booking_confirm_v1';
import { Redirect } from 'react-router-dom';

const Payment = (props) => {
    const { state } = props.location;
    if(state === undefined){
        let path = props.location.pathname;
        path = path.split("/");
        return <Redirect to={`/${path[1]}/${path[2]}`}/>
    }
    let confirmPage = <BookingV1 props={props.location.state.props} history={props.history}/>
    return (
        <div className="booking-confirm">
            <NavBarBooking path={props.location.pathname}/>
            {confirmPage}
        </div>
    )
};

export default Payment;