
const initState = {
  projects: [
    { id: '1', title: 'project 1', content: 'this is first project' },
    { id: '2', title: 'project 2', content: 'this is 2nd project' },
    { id: '3', title: 'project 3', content: 'this is 3rd project' }
  ]
};
// state and action are comming from dispatch
export const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state; // reducer returns the state to store
    case 'CREATE_PROJECT_ERROR':
      console.log('Create project error', action.err);
      return state; // reducer returns the state to store
    default:
      return state; // reducer returns the state to store
  }
  // return state;
};

export default projectReducer;
