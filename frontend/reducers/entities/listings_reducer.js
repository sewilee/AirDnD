import { merge } from 'lodash';
import { RECEIVE_BOOKS } from '../../actions/booking_actions';
import { 
    RECEIVE_LISTINGS, 
    RECEIVE_LISTING 
} from '../../actions/listing_actions';

const listingReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_BOOKS:
            if (action.bookings) {
                return merge({}, state, action.listings);
            } else {
                return state;
            }
        case RECEIVE_LISTINGS:
            if(action.listings === undefined){
                return state;
            } else 
                return action.listings;

        case RECEIVE_LISTING:
            // const newListing = { [action.listing.id]: action.listing }
            // const newState = merge( {}, state, newListing );
            // return newState
            return merge({}, state, action.listing)

        default:
            return state;
    }
}

export default listingReducer;