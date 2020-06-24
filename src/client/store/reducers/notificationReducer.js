const initialState = {
  notification: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NOTIFICATION':
      return {
        ...state,
        notification: action.notification
      };
    default:
      return state;
  }
};
