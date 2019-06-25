import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    return ({

    });
};

const mdp = (dispatch) => {
    return ({
        createReview: (review) => dispatch(createReview(review)),
    });
};

export default connect(msp, mdp)(ReviewForm);