import * as actions from '../../actions/userAction';
import { userReducer } from './userReducer';

import * as store from '../../mockData/mockStore';
import * as params from '../../mockData/mockParams';

describe('userReducer', () => {
  let expected;
  let param;
  let initialState;

  beforeEach(() => {
    initialState = {
      info: {},
      totalStats: {},
      weeklyStats: {}
    };
  });

  it('should return default state if no action is passed', () => {
    param = {};
    expect(userReducer(undefined, param)).toEqual(initialState);
  });

  it('should return proper state if setAccessToken is dispatched', () => {
    expected = store.currentUser;
    param = params.accessTokenParam;

    expect(userReducer(initialState, actions.setAccessToken(param))).toEqual(
      expected
    );
  });

  it('should return proper state if setWeeklyStats is dispatched', () => {
    expected = {
      info: {},
      totalStats: {},
      weeklyStats: {
        Friday: 3784.3,
        Monday: 2680.2,
        Saturday: 3950,
        Sunday: 0,
        Thursday: 0,
        Tuesday: 0,
        Wednesday: 2270.4
      }
    };
    param = params.weeklyActionParam;

    expect(userReducer(initialState, actions.setWeeklyStats(param))).toEqual(
      expected
    );
  });

  it('should return proper state if setTotalStats is dispatched', () => {
    param = params.totalStatsParam;
    expected = {
      info: {},
      totalStats: { Biked: 0, Ran: 7.883778744561839, Swam: 0 },
      weeklyStats: {}
    };

    expect(userReducer(initialState, actions.setTotalStats(param))).toEqual(
      expected
    );
  });
});
