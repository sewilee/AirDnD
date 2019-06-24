import { connect } from "react-redux";
import BookingForm from './booking_form';
import { createBooking, fetchBookings } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return ({
        booking: state.entities.bookings,
        currentUserId: state.session.id,
        formType: "Book",
        path: ownProps.path,
    });
};

const mdp = (dispatch) => {
    return({
        createBooking: (booking) => dispatch(createBooking(booking)),
        fetchBookings: (guestId) => dispatch(fetchBookings(guestId)),
        openModal: (modal) => dispatch(openModal(modal)),
    });
};

export default connect(msp, mdp)(BookingForm);