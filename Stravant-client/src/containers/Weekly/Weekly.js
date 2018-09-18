import React, { Component } from 'react';
import { AreaChart } from 'react-easy-chart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Weekly.css';
import * as apiCalls from '../../helpers/apiCalls/apiCalls';
import * as userActions from '../../actions/userAction';
export class Weekly extends Component {
  constructor() {
    super();
    this.state = {
      xCoordinates: 0,
      yCoordinates: 0,
      dataDisplay: '',
      toggleDisplay: false
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

  trackMouseCoordinates = event => {
    this.setState({ xCoordinates: event.screenX, yCoordinates: event.screenY });
  };

  handleClick = event => {
    this.setState({
      xCoordinates: event.pageX,
      yCoordinates: event.pageY,
      dataDisplay: `${event.y} miles`,
      toggleDisplay: !this.state.toggleDisplay
    });
  };

  render() {
    const { yCoordinates, xCoordinates } = this.state;
    const { weeklyStats } = this.props.currentUser;
    const dataToPlot = Object.keys(weeklyStats)
      .map(day => {
        return {
          x: day.slice(0, 3),
          y: Math.round((weeklyStats[day] / 1609) * 100) / 100
        };
      })
      .reverse();
    const styles = {
      position: 'absolute',
      top: yCoordinates - 140,
      left: xCoordinates + 10
    };

    return (
      <div className="compare-data-text" onClick={this.trackMouseCoordinates}>
        {this.props.currentUser.weeklyStats === {} && (
          <img src="https://cdn-images-1.medium.com/max/1200/1*fFC0LdzpExlP3VG93coZDA.gif" />
        )}
        <h3 className="weekly-title">Weekly Progress</h3>
        <AreaChart
          xType={'text'}
          margin={{ top: 10, right: 10, bottom: 60, left: 60 }}
          yDomainRange={[0, 2.4]}
          axes
          grid
          dataPoints
          areaColors={['orange']}
          verticalGrid
          clickHandler={this.handleClick}
          width={375}
          height={450}
          interpolate={'cardinal'}
          data={[dataToPlot]}
        />
        <p className="x-axis"> Day of Week </p>
        <p className="y-axis">Distance</p>

        <p className="area-data-details" style={styles}>
          {this.state.dataDisplay}
        </p>
      </div>
    );
  }
}

const { object, func } = PropTypes;

Weekly.propTypes = {
  currentUser: object,
  setWeeklyStats: func
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  setWeeklyStats: stats => dispatch(userActions.setWeeklyStats(stats))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weekly);
