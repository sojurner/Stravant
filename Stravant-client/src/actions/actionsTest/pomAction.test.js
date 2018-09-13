import { togglePomState, setPomHistory } from '../pomAction';
import * as params from '../../mockData/mockParams';

describe('Pom actions', () => {
  let param;
  let expected;

  it('should return proper type of TOGGLE_POM_STATE', () => {
    param = true;
    expected = { bool: true, type: 'TOGGLE_POM_STATE' };

    expect(togglePomState(param)).toEqual(expected);
  });

  it('should return proper type of SET_POM_HISTORY', () => {
    param = params.pomHistoryParam;
    expected = {
      bool: {
        'Wed, Sep 12, 2018 11:45 AM': { hour: 0, minute: 0, second: 2 },
        'Wed, Sep 12, 2018 12:23 PM': { hour: 0, minute: 0, second: 1 }
      },
      type: 'TOGGLE_POM_STATE'
    };

    expect(togglePomState(param)).toEqual(expected);
  });
});
