import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_REVIEWS } from '../../actions/review_actions';
import { RECEIVE_LISTING, RECEIVE_LISTINGS } from '../../actions/listing_actions';



const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTING:
      return merge({}, state, action.hostInfo);

    case RECEIVE_LISTINGS:
      return merge({}, state, action.hostInfo);

    case RECEIVE_REVIEWS:
      return merge({}, state, action.author);

    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
