import * as actions from '../../actions/pomAction';
import { pomReducer } from './pomReducer';

import * as params from '../../mockData/mockParams';
import * as store from '../../mockData/mockStore';

describe('pomReducer', () => {
  let expected;
  let initialState;
  let param;

  beforeEach(() => {
    initialState = { lastPom: '', pomHistory: {}, pomStatus: false };
    expected = store.pomStatus;
  });

  it('should return default state when undefined is passed as state', () => {
    param = {};

    expect(pomReducer(undefined, param)).toEqual(initialState);
  });

  it('should return proper state when togglePomState is dispatched', () => {
    expected = { lastPom: '', pomHistory: {}, pomStatus: true };
    param = true;

    expect(pomReducer(initialState, actions.togglePomState(param))).toEqual(
      expected
    );
  });

  it('should return proper state when setPomHistory is dispatched', () => {
    expected = {
      lastPom: '',
      pomHistory: {
        'Wed, Sep 12, 2018 11:45 AM': { hour: 0, minute: 0, second: 2 },
        'Wed, Sep 12, 2018 12:23 PM': { hour: 0, minute: 0, second: 1 }
      },
      pomStatus: false
    };
    param = params.pomHistoryParam;

    expect(pomReducer(initialState, actions.setPomHistory(param))).toEqual(
      expected
    );
  });
});
