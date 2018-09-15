export const togglePomState = bool => ({
  type: 'TOGGLE_POM_STATE',
  bool
});

export const setPomHistory = history => ({
  type: 'SET_POM_HISTORY',
  history
});

export const removePom = (history, time) => ({
  type: 'REMOVE_POM',
  history,
  time
});
