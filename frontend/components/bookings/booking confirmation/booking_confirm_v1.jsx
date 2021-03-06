import React from 'react';
import moment from 'moment'

function handleSubmit(booking, func, history){
    func(booking);
    history.push(`/listings/${booking.listingId}`);
}

const BookingV1 = ({props, history}) => {
    const { booking, listingInfo, createBooking, days } = props;

    const subPrice = listingInfo.rate * days;
    const serviceFee = Math.floor(listingInfo.rate / 25);
    const total = serviceFee + subPrice;

    const start = moment(booking.start_date).format('LL');
    const end = moment(booking.end_date).format('LL');

    booking.start_date = booking.start_date._d;
    booking.end_date = booking.end_date._d;


    let totalCost = (
        <div className="booking-rate-info">
            <li className="rate-info-li">
                <span>{listingInfo.rate} gp x {days}</span>
                <span>{subPrice} gp</span>
            </li>
            <li className="rate-info-li">
                <span>Service fee</span>
                <span>{serviceFee} gp</span>
            </li>
            <li className="rate-info-li total">
                <span>Total</span>
                <span>{total} gp</span>
            </li>
        </div>
    );

    return (
        <main className="booking-confirm-page">
            <section className="confirm-border">
                <form onSubmit={() => handleSubmit(booking, createBooking, history)}>
                    <h1>Review and Confirm</h1>
                    <div className="confirm-title"> 
                        <img src={listingInfo.photo} className="confirm-img"/>
                        <h3>{listingInfo.title}</h3>
                        <p>{listingInfo.location_type}</p>
                    </div>
                    <div className="confirm-dates">
                        <p>{days} day Campaign in {listingInfo.city}</p>
                        <p>
                            <i className="fas fa-dragon"></i>
                            <span>{booking.players} players</span>
                        </p>
                        <p>
                            <i className="far fa-calendar"></i>
                            <span>{start}</span>
                            <i className="fas fa-arrow-right"></i>
                            <span>{end}</span>
                        </p>
                        {totalCost}
                    </div>
                    <input type="submit" value="Agree and Book" className="booking-submit"/>
                </form>
            </section>
        </main>
    )
};

export default BookingV1;