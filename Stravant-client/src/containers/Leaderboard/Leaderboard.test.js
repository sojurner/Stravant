import React from 'react';
import {
  mapStateToProps,
  mapDispatchToProps,
  LeaderBoard
} from './Leaderboard';
import { setClubActivity } from '../../actions/clubAction';
import * as store from '../../mockData/mockStore';

describe('Leaderboard', () => {
  let wrapper;
  let mockSetActivity;

  beforeEach(() => {
    mockSetActivity = jest.fn();
    wrapper = shallow(
      <LeaderBoard
      // currentUser={store.mockCurrentUser}
      // clubs={store.clubInfo}
      // setClubActivity={mockSetActivity}
      />
    );
  });

  it('should map the store correctly', () => {
    const mockStore = store.mockStore;
    const expected = { clubs: undefined, currentUser: undefined };
    const mapped = mapStateToProps(mockStore);
    expect(mapped.currentUser).toEqual(mockStore.currentUser);
  });
});
