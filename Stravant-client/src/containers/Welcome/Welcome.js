import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stravaApi } from '../../data/strava_config';
import * as userActions from '../../actions/userAction';
import * as apiCalls from '../../helpers/apiCalls/apiCalls';
import * as scrape from '../../helpers/helpers/helpers';

import './Welcome.css';
export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      mSecond: 0,
      second: 0,
      minute: 0,
      hour: 0
    };
  }
  componentDidMount() {
    const { search } = window.location;
    const codeIndex = search.indexOf('code') + 5;
    const lastIndex = search.lastIndexOf('&');
    const userCode = search.slice(codeIndex, lastIndex);
    this.exchangeToken(userCode);
  }

  exchangeToken = async code => {
    const result = await apiCalls.exchangeUserToken(code);
    if (!result.message) {
      const scrapedUserInfo = scrape.userInfo(result);
      this.props.setAccessToken(scrapedUserInfo);
    }
    localStorage.setItem('code', JSON.stringify({ code }));
  };

  togglePom = () => {
    const { togglePomState, currentUser } = this.props;
    togglePomState(!currentUser.pomStatus);
  };

  startMSecond = () => {
    let time = this.state.mSecond + 1;
    time < 10
      ? this.setState({ mSecond: time })
      : this.setState({ mSecond: 0 });
  };

  startSecond = () => {
    let time = this.state.second + 1;
    time < 60 ? this.setState({ second: time }) : this.setState({ second: 0 });
  };

  startMinute = () => {
    let time = this.state.minute + 1;
    time < 60 ? this.setState({ minute: time }) : this.setState({ minute: 0 });
  };

  startHour = () => {
    let time = this.state.hour + 1;
    this.setState({ hour: time });
  };

  resetTimer = () => {
    this.setState({ mSecond: 0, second: 0, minute: 0, hour: 0 });
  };

  signOutUser = () => {
    localStorage.removeItem('code');
    window.location = 'http://localhost:3000/';
  };

  render() {
    const { info, pomStatus } = this.props.currentUser;
    const { second, minute, hour, mSecond } = this.state;
    return (
      <div className="welcome-page">
        {second > 0 &&
          pomStatus && (
            <h4>
              <span className="time hour">{hour}</span>
              :h~
              <span className="time minute">{minute}</span>
              :m~
              <span className="time second">{second}</span>
              :s~
              <span className="time mSecond">{mSecond}</span>
              :ms~
            </h4>
          )}
        {hour > 0 ||
          minute > 0 ||
          (second > 0 &&
            !pomStatus && (
              <h4>
                That was a {hour}
                h, {minute}
                m, {second}s POM!!
              </h4>
            ))}

        {info && <h2>HI {info.firstName}</h2>}
        <i className="fas fa-sign-in-alt" onClick={this.signOutUser} />
        {pomStatus ? (
          <button
            onClick={() => {
              this.togglePom();
              clearInterval(this.mSeconds);
              clearInterval(this.seconds);
              clearInterval(this.minutes);
              clearInterval(this.hours);
            }}
          >
            Done!
          </button>
        ) : (
          <button
            onClick={() => {
              this.togglePom();
              this.mSeconds = setInterval(this.startMSecond, 100);
              this.seconds = setInterval(this.startSecond, 1000);
              this.minutes = setInterval(this.startMinute, 60000);
              this.hours = setInterval(this.startHour, 600000);
            }}
          >
            POM ME!!
          </button>
        )}
        {hour > 0 ||
          minute > 0 ||
          (second > 0 &&
            !pomStatus && (
              <button className="reset-time" onClick={this.resetTimer}>
                Reset
              </button>
            ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(userActions.setAccessToken(token)),
  togglePomState: bool => dispatch(userActions.togglePomState(bool)),
  setWeeklyStats: stats => dispatch(userActions.setWeeklyStats(stats))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
