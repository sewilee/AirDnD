import { connect } from "react-redux";
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return ({
        booking: state.entities.bookings,
        currentUserId: state.session.id,
        formType: "Book",
    });
};

const mdp = (dispatch) => {
    return({
        createBooking: (booking) => dispatch(createBooking(booking)),
        openModal: (modal) => dispatch(openModal(modal)),
    });
};

export default connect(msp, mdp)(BookingForm);