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
    console.log(event);
    this.setState({ xCoordinates: event.screenX, yCoordinates: event.screenY });
  };

  handleClick = event => {
    this.setState({
      xCoordinates: event.pageX,
      yCoordinates: event.pageY,
      dataDisplay: `${Math.round((event.y / 1609) * 100) / 100} miles`,
      toggleDisplay: !this.state.toggleDisplay
    });
  };

  render() {
    const { yCoordinates, xCoordinates } = this.state;
    const { weeklyStats } = this.props.currentUser;
    const dataToPlot = Object.keys(weeklyStats)
      .map(day => {
        return { x: day, y: weeklyStats[day] };
      })
      .reverse();
    const styles = {
      position: 'absolute',
      top: yCoordinates - 50,
      left: xCoordinates - 100
    };
    return (
      <div className="compare-data-text" onClick={this.trackMouseCoordinates}>
        <AreaChart
          xType={'text'}
          axes
          grid
          dataPoints
          areaColors={['crimson']}
          verticalGrid
          onClick={this.handleClick}
          clickHandler={event =>
            this.setState({
              xCoordinates: event.screenX,
              yCoordinates: event.screenY,
              dataDisplay: `${Math.round((event.y / 1609) * 100) / 100} miles`,
              toggleDisplay: !this.state.toggleDisplay
            })
          }
          width={450}
          height={350}
          interpolate={'cardinal'}
          data={[dataToPlot]}
        />
        <p style={styles}>{this.state.dataDisplay}</p>
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
