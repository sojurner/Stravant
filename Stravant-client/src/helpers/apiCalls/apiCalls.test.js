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
      expected = mockResults.tokenResult;

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
      expected = mockResults.aggregateResult;

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

  describe('getUserClubs', () => {
    let expected;
    let result;
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResolve.clubsResolve)
        });
      });
    });

    it('should call fetch with the correct params', async () => {
      await apiCalls.getUserClubs(stravaApi.access_token);

      expect(window.fetch).toHaveBeenCalledWith('jnjpap');
    });

    //   it('should return the proper result when fetch is successfull' () => {

    //   })
  });

  // describe('getClubActivity', () => {
  //   beforeEach(()=> {
  //     window.fetch = jest.fn().mockImplementation(() => {
  //       return Promise.resolve({
  //         json: () => Promise.resolve()
  //       })
  //     })

  //     it('should call fetch with correct params', () => {
  //       apiCalls.get
  //     })
  //   })
  // })
});
