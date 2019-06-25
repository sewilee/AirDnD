import { connect } from "react-redux";
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    return ({

    });
};

const mdp = (dispatch) => {
    return ({
        fetchReviews: (listId) => dispatch(fetchReviews(listId)),
    });
};

export default connect(msp, mdp)(ReviewIndex);