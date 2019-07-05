import { merge } from 'lodash';
import {
    RECEIVE_BOOKS,
    RECEIVE_BOOK,
    REMOVE_BOOK,
} from '../../actions/booking_actions';
import { RECEIVE_LISTING } from '../../actions/listing_actions';

const bookingReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_LISTING:
            return merge({}, state, action.bookings);
        case RECEIVE_BOOKS:
            if(action.bookings){
                return merge({}, state, action.bookings);
            } else {
                return state;
            }
        case RECEIVE_BOOK:
            return merge({}, state, action.booking)
        case REMOVE_BOOK:
            let newState = merge({}, state);
            delete newState[action.bookingId]
            return newState;
        default: 
            return state;
    }
};

export default bookingReducer;