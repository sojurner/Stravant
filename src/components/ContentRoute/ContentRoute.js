import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CompareAll } from '../../containers/CompareAll/CompareAll';
import Personal from '../../containers/Personal/Personal';

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/personal" component={Personal} />
      <Route exact path="/compare" component={CompareAll} />
      <Route exact path="/leaderboard" />
    </Switch>
  );
};
