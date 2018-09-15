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
    case 'REMOVE_POM':
      const history = action.history;
      delete history[action.time];

      return {
        ...state,
        pomHistory: history
      };

    default:
      return state;
  }
};
