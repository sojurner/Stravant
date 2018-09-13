import * as actions from '../userAction';
import * as params from '../../mockData/mockParams';

describe('Pom actions', () => {
  let param;
  let expected;

  it('should should return proper type of SET_ACCESS_TOKEN', () => {
    param = params.accessTokenParam;
    expected = {
      token: {
        accessToken: 'a7eeea216a46a760a74c60acbffc3b55c66537c5',
        firstName: 'Paul',
        gender: 'M',
        profilePic:
          'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg',
        userId: 34515396
      },
      type: 'SET_ACCESS_TOKEN'
    };

    expect(actions.setAccessToken(param)).toEqual(expected);
  });

  it('should return proper type of SET_WEEKLY_STATS', () => {
    param = params.weeklyActionParam;

    expected = {
      stats: {
        Friday: 3784.3,
        Monday: 2680.2,
        Saturday: 3950,
        Sunday: 0,
        Thursday: 0,
        Tuesday: 0,
        Wednesday: 2270.4
      },
      type: 'SET_WEEKLY_STATS'
    };

    expect(actions.setWeeklyStats(param)).toEqual(expected);
  });

  it('should return properType of SET_TOTAL_STATS', () => {
    param = params.totalStatsParam;

    expected = {
      stats: { Biked: 0, Ran: 7.883778744561839, Swam: 0 },
      type: 'SET_TOTAL_STATS'
    };
    expect(actions.setTotalStats(param)).toEqual(expected);
  });
});
