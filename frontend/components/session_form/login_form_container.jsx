import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: (user) => dispatch(login(user)),
    // otherType: (
    //   <button onClick={openModal("login")}>Log in</button>
    // ),
    // closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
