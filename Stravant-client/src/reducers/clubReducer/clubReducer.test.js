import { clubReducer } from './clubReducer';
import { setClubActivity } from '../../actions/clubAction';
import * as store from '../../mockData/mockStore';
import * as params from '../../mockData/mockParams';

describe('clubReducer', () => {
  let expected;

  beforeEach(() => {
    expected = {
      clubInfo: {},
      clubActivity: {}
    };
  });

  it('should return the default state', () => {
    expect(clubReducer(undefined, {})).toEqual(expected);
  });

  it('should return the proper state of clubInfo if setClubActivity is dispatched', () => {
    const param = params.clubActionParam;
    expected = store.clubInfo;

    expect(clubReducer(undefined, setClubActivity(param))).toEqual(expected);
  });
});
