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

// 'https://images.unsplash.com/38/L2NfDz5SOm7Gbf755qpw_DSCF0490.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI0MX0&s=717f905b696bd33ced31d380b1283b60'
// 'https://images.unsplash.com/photo-1519864967-22b37f31a770?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI0MX0&s=307c453c1e85edef8468f925da9e1f74'

export default ContentRoute;
