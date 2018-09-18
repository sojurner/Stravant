import * as helpers from './helpers';
import * as mockResults from '../../mockData/mockResults';
import * as mockParams from '../../mockData/mockParams';

describe('userInfo', () => {
  let mockParam;
  let expected;
  let mockCurrTime;
  let lastPomtime;

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

  it('should properly scrape the pomData received from fetch if current time is in the afternoon before 10 and last pom time was in in the afternoon before 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 5:30 PM';
    lastPomtime = 'Mon, Sep 17, 2018 4:00 PM';

    const expected = 'an hour and 30 minutes ago (Take a Pom Soon!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current time is in the afternoon and after 10 and last pom time was in in the afternoon before 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 10:30 PM';
    lastPomtime = 'Mon, Sep 17, 2018 4:00 PM';

    const expected = '6 hours and 30 minutes ago (Take a Pom!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current time is in the morning and after 10 and last pom time was in in the afternoon before 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 10:30 AM';
    lastPomtime = 'Mon, Sep 17, 2018 4:00 PM';

    const expected = '30 min ago (Keep at it!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current time is in the morning and after 10 and last pom time was in in the afternoon before 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 10:30 AM';
    lastPomtime = 'Mon, Sep 17, 2018 4:00 PM';

    const expected = '30 min ago (Keep at it!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current time is in the morning and after 10 and last pom time was in in the afternoon after 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 11:30 PM';
    lastPomtime = 'Mon, Sep 17, 2018 10:20 PM';

    const expected = 'an hour and 10 minutes ago (Take a Pom Soon!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current time is in the morning and after 10 and last pom time was in in the morning after 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 11:30 PM';
    lastPomtime = 'Mon, Sep 17, 2018 10:20 AM';

    const expected = '13 hours and 10 minutes ago (Take a Pom!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current time is in the morning and after 10 and last pom time was in in the afternoon after 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 11:30 PM';
    lastPomtime = 'Mon, Sep 17, 2018 12:45 AM';

    const expected = '10 hours and 15 minutes ago (Take a Pom!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current minute is less than last pom minute', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 10:30 PM';
    lastPomtime = 'Mon, Sep 17, 2018 4:45 PM';

    const expected = '5 hours and 15 minutes ago (Take a Pom!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current last pom was in the morning before 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 10:30 AM';
    lastPomtime = 'Mon, Sep 17, 2018 4:45 AM';

    const expected = '5 hours and 15 minutes ago (Take a Pom!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });

  it('should properly scrape the pomData received from fetch if current time was in the morning before 10', () => {
    mockCurrTime = 'Mon, Sep 17, 2018 8:00 AM';
    lastPomtime = 'Mon, Sep 17, 2018 4:45 AM';

    const expected = '3 hours and 45 minutes ago (Take a Pom!)';

    const response = helpers.getLastPomTime(mockCurrTime, lastPomtime);
    expect(response).toEqual(expected);
  });
});
