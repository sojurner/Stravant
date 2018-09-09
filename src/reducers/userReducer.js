const initialState = {
  info: {},
  weeklyStats: {},
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

    case 'SET_WEEKLY_STATS':
      return {
        ...state,
        weeklyStats: action.stats
      };

    default:
      return state;
  }
};
