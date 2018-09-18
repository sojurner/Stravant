import React from 'react';
import { shallow } from 'enzyme';
import ContentRoute from './ContentRoute';
import Weekly from '../Weekly/Weekly';
import { Personal } from '../Personal/Personal';
import Leaderboard from '../Leaderboard/Leaderboard';
import { PomControl } from '../PomControl/PomControl';

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
      <ContentRoute path="/weekly" component={Weekly} />
    );
    expect(compareWrapper).toMatchSnapshot();
  });

  it('should MatchSnapshot when path matches Pomodoro', () => {
    let pomWrapper = shallow(
      <ContentRoute path="/pomodoro" component={PomControl} />
    );

    expect(pomWrapper).toMatchSnapshot();
  });
});
