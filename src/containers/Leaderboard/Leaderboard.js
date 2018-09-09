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
    console.log(clubActivity);
    const sortedByDistance = Object.keys(clubActivity).sort(
      (nameA, nameB) =>
        clubActivity[nameB].totalDistance - clubActivity[nameA].totalDistance
    );
    console.log(clubActivity[sortedByDistance[0]]);
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

    return (
      <div>
        {/* <h3>{clubActivity[sortedByDistance[0]].mostRecent}</h3> */}
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
