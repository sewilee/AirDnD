import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
import { closeModal } from './modal_actions';

export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
};

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
  })
}

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then( 
      (res) => {
        dispatch(receiveCurrentUser(res));
        dispatch(closeModal())
    },(err) => {
        dispatch(receiveErrors(err.responseJSON))
    });
  };
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then( 
      (res) => {
        dispatch(receiveCurrentUser(res));
        dispatch(closeModal())
    },(err) => {
      return dispatch(receiveErrors(err.responseJSON))
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(res => {
      dispatch(logoutCurrentUser(res))
    });
  };
};
