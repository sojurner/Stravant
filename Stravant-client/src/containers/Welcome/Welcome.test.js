import React from 'react';
import { Welcome } from './Welcome';
import * as store from '../../mockData/mockStore';

jest.mock('../../helpers/apiCalls/apiCalls');

describe('Welcome', () => {
  let wrapper;
  let mockCurrentUser;
  let mockSetToken;
  let mockSetWeekly;

  beforeEach(() => {
    mockSetToken = jest.fn();
    mockSetWeekly = jest.fn();
    mockCurrentUser = store.currentUser;

    wrapper = shallow(
      <Welcome
        currentUser={mockCurrentUser}
        setWeeklyStats={mockSetWeekly}
        setAccessToken={mockSetToken}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
