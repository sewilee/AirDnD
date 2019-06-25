import { connect } from "react-redux";
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    const listing = Object.keys(state.entities.listings);
    const listId = listing[0];
    let reviews = state.entities.reviews;
    if(reviews){ reviews = Object.values(state.entities.reviews) }
    // debugger
    return ({
        reviews,
        listId,
    });
};

const mdp = (dispatch) => {
    return ({
        fetchReviews: (listId) => dispatch(fetchReviews(listId)),
    });
};

export default connect(msp, mdp)(ReviewIndex);