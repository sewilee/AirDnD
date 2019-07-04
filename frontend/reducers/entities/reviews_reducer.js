import { merge } from 'lodash';
import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
} from '../../actions/review_actions';
import { RECEIVE_LISTINGS } from '../../actions/listing_actions';

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_LISTINGS: {
            return {};
        }
        case RECEIVE_REVIEWS:
            if(action.review){
                return action.review;
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