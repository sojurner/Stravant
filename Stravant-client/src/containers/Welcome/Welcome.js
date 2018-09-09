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
      timer: 0
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
    const { togglePomState, currentUser, pomStatus } = this.props;
    if (pomStatus) {
      this.setState({ timer: 0 });
    }
    togglePomState(!currentUser.pomStatus);
  };

  startTimer = () => {
    let time = this.state.timer + 1;
    this.setState({ timer: time });
  };

  signOutUser = () => {
    localStorage.removeItem('code');
    window.location = 'http://localhost:3000/';
  };

  render() {
    const { info, pomStatus } = this.props.currentUser;
    return (
      <div className="welcome-page">
        {this.state.timer > 0 && pomStatus && <h4>{this.state.timer}</h4>}
        {this.state.timer > 0 &&
          !pomStatus && (
            <h4>
              You took a {this.state.timer}
              sec pom
            </h4>
          )}
        {info && <h2>HI {info.firstName}</h2>}
        <i className="fas fa-sign-in-alt" onClick={this.signOutUser} />
        {pomStatus ? (
          <button
            onClick={() => {
              this.togglePom();
              clearInterval(this.time);
            }}
          >
            Done!
          </button>
        ) : (
          <button
            onClick={() => {
              this.togglePom();
              this.time = setInterval(this.startTimer, 1000);
            }}
          >
            POM TIME
          </button>
        )}
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
