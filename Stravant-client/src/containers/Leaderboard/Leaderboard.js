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
    console.log(clubActivities);
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
          <h3 className="recent-dash">{recentActivity}</h3>
        </div>
      );
    });

    return (
      <div>
        {activity}
        <table width="500">
          {!Object.keys(clubActivity).length && (
            <img
              src={'https://media.giphy.com/media/26xBNwL69IM5ng3f2/source.gif'}
              height="100"
              width="100"
              className="connect-logo"
            />
          )}
          <tbody>
            <tr>
              <th>Name</th>
              <th>Recent</th>
              <th>Distance(mi)</th>
              <th>Duration(m)</th>
            </tr>
            {table}
          </tbody>
        </table>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  clubs: state.clubs
});

export const mapDispatchToProps = dispatch => ({
  setClubActivity: activities =>
    dispatch(clubActions.setClubActivity(activities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoard);
