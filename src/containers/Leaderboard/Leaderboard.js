import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as apiCalls from '../../helpers/apiCalls/apiCalls';
import * as clubActions from '../../actions/clubAction';

import './Leaderboard.css';
export class LeaderBoard extends Component {
  componentDidMount() {
    this.getClubActivity(this.props.currentUser.info.accessToken);
  }

  getClubActivity = async token => {
    const clubActivities = await apiCalls.getUserClubs(token);
    this.props.setClubActivity(clubActivities);
  };

  render() {
    const { clubActivity } = this.props.clubs;
    const unfilteredKeys = Object.keys(clubActivity).filter(
      key => key === 'mostRecent'
    );
    const filteredKeys = Object.keys(clubActivity).filter(
      key => key !== 'mostRecent'
    );
    const sortedByDistance = filteredKeys.sort(
      (nameA, nameB) =>
        clubActivity[nameB].totalDistance - clubActivity[nameA].totalDistance
    );
    const table = sortedByDistance.map(person => {
      return (
        <tr>
          <td>{person}</td>
          <td>{clubActivity[person].membersRecent}</td>
          <td>{Math.round(clubActivity[person].totalDistance * 100) / 100}</td>
          <td>{Math.round(clubActivity[person].totalTime * 100) / 100}</td>
        </tr>
      );
    });

    const activity = unfilteredKeys.map(recent => {
      const { distance, name, activity } = clubActivity.mostRecent;
      const roundedDistance = Math.round(distance * 100) / 100;
      const recentActivity = `${name} did a ${roundedDistance}
      mile ${activity}`;
      return (
        <div>
          <h3>{recentActivity}</h3>
        </div>
      );
    });

    return (
      <div>
        {activity}
        <table width="500">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Last Activity</th>
              <th>Distance (miles)</th>
              <th>Time exercised (minutes)</th>
            </tr>
            {table}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  clubs: state.clubs
});

const mapDispatchToProps = dispatch => ({
  setClubActivity: activities =>
    dispatch(clubActions.setClubActivity(activities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoard);
