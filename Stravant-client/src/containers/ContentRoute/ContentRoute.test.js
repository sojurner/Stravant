import React from 'react';
import { MemoryRouter } from 'react-router';

import ContentRoute from './ContentRoute';
import Comparison from '../Comparison/Comparison';
import { Personal } from '../Personal/Personal';
import Leaderboard from '../Leaderboard/Leaderboard';
import * as mockStore from '../../mockData/mockStore';
import { Provider } from 'redux';

describe('ContentRoute', () => {
  it('should matchsnapshot when path matches personal', () => {
    let personalWrapper = shallow(
      <ContentRoute path="/personal" component={Personal} />
    );
    expect(personalWrapper).toMatchSnapshot();
  });

  it('should MatchSnapshot when path matches leaderboard', () => {
    let leaderboardWrapper = shallow(
      <ContentRoute path="/leaderboard" component={Leaderboard} />
    );
    expect(leaderboardWrapper).toMatchSnapshot();
  });

  it('should MatchSnapshot when path matches Compare', () => {
    let compareWrapper = shallow(
      <ContentRoute path="/compare" component={Comparison} />
    );
    expect(compareWrapper).toMatchSnapshot();
  });
});
