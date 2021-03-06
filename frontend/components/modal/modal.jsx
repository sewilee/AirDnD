import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreateBookingContainer from '../bookings/create_booking_container';
import ConfirmedBooking from '../bookings/booking_submitted';

const msp = (state) => {
    return({
        modal: state.ui.modal,
    });
};

const mdp = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
    });
};

const Modal = (props) => {
    let { modal, closeModal } = props;

    if (!modal){modal = null;}
    let component;

    switch(modal){
        case "login":
            component = <LoginFormContainer />
            break;
        case "signup":
            component = <SignupFormContainer />
            break;
        case "book":
            component = <CreateBookingContainer />
            break;
        case "booking-submitted":
            component = <ConfirmedBooking />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                <button className="login-form-close" onClick={closeModal}>&times;</button>
                { component }
            </div>
        </div>
    );
}

export default connect(msp, mdp)(Modal);