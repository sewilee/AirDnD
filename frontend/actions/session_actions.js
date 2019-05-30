import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export { closeModal } from './modal_actions';

export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then( 
      (res) => {
        return dispatch(receiveCurrentUser(res))}, 
      (err) => {
        return dispatch(receiveErrors(err.responseJSON))}
    )
  };
};

export const login = (user) => {
  return (dispatch) => {
    APIUtil.login(user).then( 
      res => {
        dispatch(receiveCurrentUser(res));
    }, err => {
      dispatch(receiveErrors(err.responseJSON))
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(res => {
      dispatch(logoutCurrentUser(res))
    });
  };
};
