import { connect } from "react-redux";
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    return ({
        // currentUserId: state.session.id,
        reviews: state.entities.reviews,
        users: state.entities.users,
        listId: ownProps.listId,
    });
};

const mdp = (dispatch) => {
    return ({
        fetchReviews: (listId) => dispatch(fetchReviews(listId)),
    });
};

export default connect(msp, mdp)(ReviewIndex);