import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PieChart, Legend } from 'react-easy-chart';
import * as apiFetch from '../../helpers/apiCalls/apiCalls';
import * as userActions from '../../actions/userAction';
import './Personal.css';

export class Personal extends Component {
  constructor() {
    super();
    this.state = {
      showToolTip: false,
      top: '',
      left: '',
      value: '',
      key: '',
      goal: 0
    };
  }

  componentDidMount() {
    this.getUserStats();
  }

  getUserStats = async () => {
    const { setTotalStats } = this.props;
    const { accessToken, userId } = this.props.currentUser.info;
    const userStats = await apiFetch.getAggregateStats(accessToken, userId);
    setTotalStats(userStats);
  };

  mouseOverHandler = data => {
    this.setState({
      key: data.data.key
    });
  };

  mouseOutHandler = () => {
    this.setState({ showToolTip: false });
  };

  render() {
    // const mockData = { running: 32, swimming: 56, biking: 100 };
    const { totalStats } = this.props.currentUser;
    const filteredActivity = Object.keys(totalStats).filter(
      key => totalStats[key] !== 0
    );
    const pieData = filteredActivity.map((activity, index) => {
      return {
        key: activity,
        value: Math.round(totalStats[activity] * 100) / 100,
        color: `rgb(${index}04, 1${index}9, 2${index}4)`
      };
    });

    const textDisplay = filteredActivity.map((activity, index) => {
      if (this.state.showToolTip && this.state.key === activity) {
        return (
          <p className="personal-stats">
            {activity} {this.state.value} miles!!
          </p>
        );
      }
    });

    return (
      <div className="pie-chart-wrap">
        <PieChart
          className="personal-piechart"
          data={pieData}
          innerHoleSize={150}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={event => this.mouseOutHandler(event)}
          padding={10}
          clickHandler={d =>
            this.setState({
              showToolTip: true,
              value: `${d.data.value}`
            })
          }
        />
        <Legend data={pieData} dataId={'key'} />
        {textDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  setTotalStats: stats => dispatch(userActions.setTotalStats(stats))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal);
