import * as helpers from './helpers';
import * as mockResults from '../../mockData/mockResults';
import * as mockParams from '../../mockData/mockParams';

describe('userInfo', () => {
  let mockParam;
  let expected;
  beforeEach(() => {});

  it('should scrape the userInfo received from fetch', () => {
    mockParam = mockParams.userInfoParams;
    expected = mockResults.scrapedUserInfo;

    const userInfoObj = helpers.userInfo(mockParam);

    expect(userInfoObj).toEqual(expected);
  });

  it('should scrape the userStats received from fetch', () => {
    mockParam = mockParams.userStatsParams;
    expected = mockResults.scrapedUserStats;

    const userStatsObj = helpers.userStats(mockParam);

    expect(userStatsObj).toEqual(expected);
  });

  it('should scrape the clubData recieved from fetch', () => {
    mockParam = mockParams.clubDataResultParam;
    const mockParamTwo = mockParams.clubActivityDataParam;
    expected = mockResults.scrapedClubData;

    const clubDataObj = helpers.clubData(mockParam, mockParamTwo);
    expect(clubDataObj).toEqual(expected);
  });

  it('should scrape the weeklyData recieved from fetch', () => {
    mockParam = mockParams.weeklyDataParams;
    expected = mockResults.scrapedWeeklyData;

    const weeklyDataObj = helpers.weeklyData(mockParam);
    expect(weeklyDataObj).toEqual(expected);
  });
});
