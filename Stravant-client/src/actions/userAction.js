export const setAccessToken = token => ({
  type: 'SET_ACCESS_TOKEN',
  token
});

export const togglePomState = bool => ({
  type: 'TOGGLE_POM_STATE',
  bool
});

export const setWeeklyStats = stats => ({
  type: 'SET_WEEKLY_STATS',
  stats
});

export const setTotalStats = stats => ({
  type: 'SET_TOTAL_STATS',
  stats
});
