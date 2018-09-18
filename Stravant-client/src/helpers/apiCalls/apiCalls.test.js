import * as apiCalls from './apiCalls';
import * as mockResolve from '../../mockData/mockResolves';
import * as mockParams from '../../mockData/mockParams';
import * as mockResults from '../../mockData/mockResults';
import { stravaApi } from '../../data/strava_config';

describe('apiCalls', () => {
  let mockCode = 'r5423rffda4c234ctwtwert2ct';

  describe('exchangeUserToken', () => {
    let expected;
    let result;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResolve.tokenExchangeResolve)
        });
      });
    });

    it('call exhcangeUserToken with the correct Params', () => {
      expected = mockParams.tokenParams;

      apiCalls.exchangeUserToken(mockCode);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return the proper result', async () => {
      expected = {
        accessToken: 'a7eeea216a46a760a74c60acbffc3b55c66537c5',
        firstName: 'Paul',
        gender: 'M',
        profilePic:
          'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg',
        userId: 34515396
      };

      result = await apiCalls.exchangeUserToken(mockCode);

      expect(result).toEqual(expected);
    });
  });

  describe('getAggregateStats', () => {
    let expected;
    let result;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResolve.aggregateResolve)
        });
      });
    });

    it('calls fetch with correct params', () => {
      expected = mockParams.aggregateParams;

      apiCalls.getAggregateStats(stravaApi.access_token, stravaApi.client_id);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return the proper result when fetch is succesful', async () => {
      expected = {
        runningTotal: {
          'Distance (miles)': 1.2945929148539466,
          'Elevation (feet)': 2,
          'Time (min)': 11.213333333333335
        }
      };

      result = await apiCalls.getAggregateStats(
        stravaApi.access_token,
        stravaApi.client_id
      );

      expect(result).toEqual(expected);
    });
  });

  describe('getWeeklyStats', () => {
    let expected;
    let result;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResolve.weeklyResolve)
        });
      });
    });
    it('should call fetch method', async () => {
      await apiCalls.getWeeklyStats(stravaApi.access_token, 6);

      expect(window.fetch).toHaveBeenCalled();
    });

    it('should return proper result when promise is resolved', async () => {
      expected = mockResults.weeklyResult;

      result = await apiCalls.getWeeklyStats(stravaApi.access_token, 6);

      expect(result).toEqual(expected);
    });
  });

  describe('getClubActivity', () => {
    // let expected;
    let result;

    beforeEach(() => {
      result = [
        {
          id: 473825,
          resource_state: 2,
          name: 'Stravant Club',
          profile_medium:
            'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246543/1/medium.jpg',
          profile:
            'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246543/1/large.jpg',
          cover_photo:
            'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246574/1/large.jpg',
          cover_photo_small:
            'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246574/1/small.jpg',
          sport_type: 'running',
          city: 'Denver',
          state: 'Colorado',
          country: 'United States',
          private: false,
          member_count: 5,
          featured: false,
          verified: false,
          url: 'stravant'
        }
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(result)
        });
      });
    });

    it('should call fetch method', async () => {
      await apiCalls.getUserClubs('asdfsa1234');

      expect(window.fetch).toHaveBeenCalled();
    });
  });
});
