/* eslint-disable prefer-destructuring */
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { SET_CURRENT_USER, LOGOUT_SUCCESS } from '../types/types';

export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });// dispatch will send action over reducer i.e. authReducer
  }).catch((err) => {
    dispatch({ type: 'LOGIN_ERROR', err });
  });
};

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}


export default function logInAction(creds) {
  return dispatch => Axios.post('/api/auth', creds)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('Token', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
}

export function logOut() {
  return {
    type: LOGOUT_SUCCESS
  };
}


export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  });
};

export function newUser(user) {
  return () => Axios.post('/api/users', user);
}

export function createNew(notification) {
  return () => Axios.post('/api/notifications', notification);
}
