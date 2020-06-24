import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER, LOGOUT_SUCCESS } from '../types/types';
import { setCurrentUser } from '../actions/authActions';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

const initState = {
  authError: null,
  isAuthenticated: false,
  user: {}
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    case LOGOUT_SUCCESS:
      return (dispatch) => {
        localStorage.removeItem('Token');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'login failed.'
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state, // here state is null i.e. initial state not comming from store
        authError: null //
      };
    case 'SIGNOUT_SUCCESS':
      console.log('logout success');
      return state;
    default:
      return state;
  }
};

export default authReducer;
