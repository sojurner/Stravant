import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Comparison from '../Comparison/Comparison';
import Personal from '../Personal/Personal';
import Leaderboard from '../Leaderboard/Leaderboard';

class ContentRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/compare" component={Comparison} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Switch>
    );
  }
}

export default ContentRoute;

// 'https://images.unsplash.com/38/L2NfDz5SOm7Gbf755qpw_DSCF0490.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI0MX0&s=717f905b696bd33ced31d380b1283b60'
// 'https://images.unsplash.com/photo-1519864967-22b37f31a770?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI0MX0&s=307c453c1e85edef8468f925da9e1f74'

const mapStateToProps = state => ({});

// export default connect;
