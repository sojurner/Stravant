const initialState = { pomStatus: false, lastPom: '', pomHistory: {} };

export const pomReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_POM_STATE':
      return {
        ...state,
        pomStatus: action.bool
      };

    case 'SET_POM_HISTORY':
      return {
        ...state,
        pomHistory: action.history
      };

    case 'SET_LAST_POM':
      return {
        ...state,
        lastPom: action.str
      };

    default:
      return state;
  }
};
