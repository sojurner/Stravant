const initialState = {
  info: {},
  totalStats: {},
  weeklyStats: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        info: action.token
      };

    case 'SET_WEEKLY_STATS':
      return {
        ...state,
        weeklyStats: action.stats
      };

    case 'SET_TOTAL_STATS':
      return {
        ...state,
        totalStats: action.stats
      };

    default:
      return state;
  }
};
