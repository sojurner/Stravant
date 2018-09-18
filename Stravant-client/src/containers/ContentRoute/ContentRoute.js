import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Weekly from '../Weekly/Weekly';
import Personal from '../Personal/Personal';
import Leaderboard from '../Leaderboard/Leaderboard';
import PomControl from '../../containers/PomControl/PomControl';

export class ContentRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/weekly" component={Weekly} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/pomodoro" component={PomControl} />
      </Switch>
    );
  }
}

export default ContentRoute;
