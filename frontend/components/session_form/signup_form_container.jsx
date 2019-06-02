import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (props) => {
  const {  errors } = props
  return {
    errors: errors.session,
    formType: 'Sign up',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: (user) => dispatch(login(user)),
    // otherType: (
    //   <button onclick={openModal("signup")}>Sign up</button>
    // ),
    // closeModal: () => dispatch(closeModal),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
