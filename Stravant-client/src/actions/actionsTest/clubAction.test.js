import { setClubActivity } from '../clubAction';
import * as params from '../../mockData/mockParams';

describe('Club Actions', () => {
  let param;
  let expected;

  it('should return proper type of SET_CLUB_ACTIVITY', () => {
    param = params.clubActionParam;
    expected = {
      activities: {
        clubId: 473825,
        clubName: 'Stravant Club',
        membersStats: {
          Benjamin: {
            membersRecent: 'Light rail trip',
            totalDistance: 1.17,
            totalTime: 20
          },
          Jesse: {
            membersRecent: 'Evening Run',
            totalDistance: 278.77,
            totalTime: 5297
          },
          Pamela: {
            membersRecent: 'Afternoon Run',
            totalDistance: 62.88999999999999,
            totalTime: 635
          },
          Paul: {
            membersRecent: 'Morning Run',
            totalDistance: 7.87,
            totalTime: 101
          },
          mostRecent: {
            activity: 'Morning Run',
            distance: 1.4110627719080175,
            name: 'Paul'
          }
        }
      },
      type: 'SET_CLUB_ACTIVITY'
    };

    expect(setClubActivity(param)).toEqual(expected);
  });
});
