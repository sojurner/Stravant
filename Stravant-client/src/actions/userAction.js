export const setAccessToken = token => ({
  type: 'SET_ACCESS_TOKEN',
  token
});

export const setWeeklyStats = stats => ({
  type: 'SET_WEEKLY_STATS',
  stats
});

export const setTotalStats = stats =>
  console.log(stats) || {
    type: 'SET_TOTAL_STATS',
    stats
  };
