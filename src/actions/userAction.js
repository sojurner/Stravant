export const setAccessToken = token => ({
  type: 'SET_ACCESS_TOKEN',
  token
});

export const togglePomState = bool => ({
  type: 'TOGGLE_POM_STATE',
  bool
});
