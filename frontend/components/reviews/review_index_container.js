import { connect } from "react-redux";
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    
    let reviews = state.entities.reviews;
    return ({
        reviews,
        listId: ownProps.listId,
    });
};

const mdp = (dispatch) => {
    return ({
        fetchReviews: (listId) => dispatch(fetchReviews(listId)),
    });
};

export default connect(msp, mdp)(ReviewIndex);