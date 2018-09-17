import React from 'react';
import {
  mapStateToProps,
  mapDispatchToProps,
  LeaderBoard
} from './Leaderboard';
import { setClubActivity } from '../../actions/clubAction';
import * as store from '../../mockData/mockStore';
import { getUserClubs } from '../../helpers/apiCalls/apiCalls';

jest.mock('../../helpers/apiCalls/apiCalls');

describe('Leaderboard', () => {
  let wrapper;
  let mockSetActivity;
  let userClubsResolution = {
    clubName: 'Stravant Club',
    clubId: 473825,
    membersStats: {
      mostRecent: {
        name: 'Pamela',
        distance: 2.2472343070229956,
        activity: 'Evening Run'
      },
      Pamela: {
        totalDistance: 82.52000000000001,
        totalTime: 843,
        membersRecent: 'Afternoon Run'
      },
      Jesse: {
        totalDistance: 281.4699999999999,
        totalTime: 5318,
        membersRecent: 'Morning Run'
      },
      Paul: {
        totalDistance: 8.719999999999999,
        totalTime: 119,
        membersRecent: 'Morning Run'
      },
      Benjamin: {
        totalDistance: 1.75,
        totalTime: 29,
        membersRecent: 'Light rail trip'
      }
    }
  };

  beforeEach(() => {
    mockSetActivity = jest.fn();

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(userClubsResolution)
      })
    );
    wrapper = shallow(
      <LeaderBoard
        currentUser={store.mockCurrentUser}
        clubs={store.clubInfo}
        setClubActivity={mockSetActivity}
      />
    );
  });

  it('should match snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should make a fetch on componentDidMount', async () => {
    await wrapper.instance().getClubActivity();
    expect(getUserClubs).toHaveBeenCalled();
  });

  it('should map the store correctly to currentUser', () => {
    const mockStore = store.mockStore;
    const mapped = mapStateToProps(mockStore);

    expect(mapped.currentUser).toEqual(mockStore.currentUser);
    expect(mapped.clubs).toEqual(mockStore.clubs);
  });

  it('should should call setClubActivity when dispatched', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setClubActivity();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
