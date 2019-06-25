import { merge } from 'lodash';
import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
} from '../../actions/review_actions';

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_REVIEWS:
            if(action.reviews){
                return action.reviews;
            } else {
                return state;
            }
        case RECEIVE_REVIEW:
            return merge({}, state, action.review);
        default: 
            return state;
    }
};

export default reviewReducer;