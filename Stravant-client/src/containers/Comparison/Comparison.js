import React, { Component } from 'react';
import { AreaChart } from 'react-easy-chart';
import { connect } from 'react-redux';
import './Comparison.css';
import * as apiCalls from '../../helpers/apiCalls/apiCalls';
import * as userActions from '../../actions/userAction';

export class Comparison extends Component {
  constructor() {
    super();
    this.state = {
      xCoordinates: 0,
      yCoordinates: 0,
      dataDisplay: ''
    };
  }

  componentDidMount() {
    this.retrieveWeeklyStats();
  }

  retrieveWeeklyStats = async () => {
    const { currentUser, setWeeklyStats } = this.props;
    const accumulativeStats = await apiCalls.getWeeklyStats(
      currentUser.info.accessToken,
      0
    );
    setWeeklyStats(accumulativeStats);
  };

  render() {
    const { weeklyStats } = this.props.currentUser;
    const dataToPlot = Object.keys(weeklyStats)
      .map(day => {
        return { x: day, y: weeklyStats[day] };
      })
      .reverse();
    return (
      <div>
        <AreaChart
          xType={'text'}
          axes
          grid
          dataPoints
          areaColors={['crimson']}
          verticalGrid
          width={350}
          height={250}
          interpolate={'cardinal'}
          data={[dataToPlot]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  setWeeklyStats: stats => dispatch(userActions.setWeeklyStats(stats))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comparison);
