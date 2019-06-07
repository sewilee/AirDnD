import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

const receieveBooks = (bookings) => {
    return ({
        type: RECEIVE_BOOKS,
        bookings,
    })
};

const receiveBook = (booking) => {
    return ({
    type: RECEIVE_BOOK,
    booking,
    })
};

const removeBook = (id) => {
    return({
        type: REMOVE_BOOK,
        bookingId: id,
    })
};

export const fetchBookings = (guestId) => {
    return (dispatch) => {
        return BookingAPIUtil.fetchBookings(guestId).then( (res) => {
            dispatch(receieveBooks(res));
        });
    };
};

export const fetchbooking = (bookId) => {
    return (dispatch) => {
        return BookingAPIUtil.fetchBooking(bookId).then( (res) => {
            dispatch(receiveBook(res));
        });
    };
};

export const createBooking = (booking) => {
    return (dispatch) => {
        return BookingAPIUtil.createBooking(booking).then( (res) => {
            dispatch(receiveBook(res));
        });
    };
};

export const updateBooking = (booking) => {
    return (dispatch) => {
        return BookingAPIUtil.updateBooking(booking).then( (res) => {
            dispatch(receiveBook(res));
        });
    };
};

export const deleteBooking = (bookId) => {
    return (dispatch) => {
        return BookingAPIUtil.deleteBooking(bookId).then( (res) => {
            dispatch(removeBook(res));
        });
    };
};