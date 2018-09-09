const initialState = {
  clubInfo: {},
  clubActivity: {}
};
export const clubReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLUB_ACTIVITY':
      return {
        clubInfo: {
          clubName: action.activities.clubName,
          clubId: action.activities.clubId
        },
        clubActivity: action.activities.membersStats
      };

    default:
      return state;
  }
};
