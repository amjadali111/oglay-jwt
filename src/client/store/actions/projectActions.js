/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
export const createProject = project =>
// async call to database

  (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project, // spread operator
      authorFirstName: 'Ali',
      authorLastName: 'Noman',
      authorId: 1234,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });// dispatch sends an action with a state to reducer
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    });
  };
export default createProject;
