import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

const msp = (state, ownProps) => {
    const { session, entities:{users} } = state;
    const { path } = ownProps
    return ({
        path,
        currentUser: users[session.id] || null,
    });
};

const mdp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal)),
    });
};

export default connect(msp, mdp)(NavBar);

