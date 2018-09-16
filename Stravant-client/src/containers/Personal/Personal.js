import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PieChart, Legend, ToolTip } from 'react-easy-chart';
import * as apiFetch from '../../helpers/apiCalls/apiCalls';
import * as userActions from '../../actions/userAction';
import './Personal.css';
import { type } from 'os';

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
    console.log(data);
    this.setState({
      key: data.data.key,
      value: data.data.value,
      showToolTip: true
    });
  };

  mouseOutHandler = () => {
    this.setState({ showToolTip: false });
  };

  render() {
    const { totalStats } = this.props.currentUser;
    const filteredActivity = Object.keys(totalStats).map(type => {
      const destructured = totalStats[type];
      let dataArr = [];
      let configArr = [];
      Object.keys(destructured).forEach((stat, index) => {
        const filtered = {
          key: stat,
          value: Math.round(destructured[stat] * 100) / 100,
          color: `rgb(${index}04, 1${index}9, 2${index}4)`
        };

        const config = { color: `rgb(${index}04, 1${index}9, 2${index}4)` };
        dataArr.push(filtered);
        configArr.push(config);
      });
      return (
        <div>
          <h3 className="running-avg">Running Averages</h3>
          <Legend
            className="legend-key"
            data={dataArr}
            config={configArr}
            dataId={'key'}
          />
          <PieChart
            size={375}
            data={dataArr}
            innerHoleSize={130}
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={event => this.mouseOutHandler(event)}
            padding={10}
          />
        </div>
      );
    });

    return (
      <div className="pie-chart-wrap">
        {!totalStats['runningTotal'] && (
          <div className="spinning-globe">Credits to Nick</div>
        )}
        {filteredActivity}
        {this.state.value &&
          this.state.showToolTip && (
            <p className="data-details">
              {`${this.state.key}: ${this.state.value}`}
            </p>
          )}
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
