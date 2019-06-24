import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings, deleteBooking } from '../../../actions/booking_actions';

const msp = (state, ownProps) => {
    return ({
        path: ownProps.path,
        currentUserId: state.session.id, 
        bookings: state.entities.bookings,
    });
};

const mdp = (dispatch) => {
    return ({
        fetchBookings: (guestId) => dispatch(fetchBookings(guestId)),
        deleteBooking: (bookId) => dispatch(deleteBooking(bookId)),
    });
};

export default connect(msp, mdp)(BookingIndex);