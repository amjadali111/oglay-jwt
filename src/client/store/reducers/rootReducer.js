import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { projectReducer } from './projectReducer';
import { authReducer } from './authReducer';
import { flashMessages } from './flashMessages';

export const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  flashMessage: flashMessages,
  firestore: firestoreReducer, // handles database
  firebase: firebaseReducer// handles auth services
});

export default rootReducer;
