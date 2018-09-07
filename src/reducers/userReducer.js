const initialState = {
  info: {},
  pomStatus: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        info: action.token
      };

    case 'TOGGLE_POM_STATE':
      return {
        ...state,
        pomStatus: action.bool
      };

    default:
      return state;
  }
};
