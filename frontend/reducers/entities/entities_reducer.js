import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings.reducer';
import bookings from './bookings_reducer';
import reviews from './reviews_reducer';

export default combineReducers({
  users,
  listings,
  bookings,
  reviews,
});
