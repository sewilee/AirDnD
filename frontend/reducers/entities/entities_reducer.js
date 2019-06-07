import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings.reducer';
import bookings from './bookings_reducer';

export default combineReducers({
  users,
  listings,
  bookings,
});
