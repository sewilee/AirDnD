import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings.reducer';

export default combineReducers({
  users,
  listings,
});
