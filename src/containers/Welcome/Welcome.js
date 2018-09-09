import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stravaApi } from '../../data/strava_config';
import * as userActions from '../../actions/userAction';
import * as apiCalls from '../../helpers/apiCalls/apiCalls';
import * as scrape from '../../helpers/helpers/helpers';

import './Welcome.css';
export class Welcome extends Component {
  componentDidMount() {
    const userCode = window.location.search.slice(13, 53);
    this.exchangeToken(userCode);
  }

  exchangeToken = async code => {
    const result = await apiCalls.exchangeUserToken(code);
    if (!result.message) {
      const scrapedUserInfo = scrape.userInfo(result);
      this.props.setAccessToken(scrapedUserInfo);
    }
  };

  handleClick = () => {
    const url = `https://www.strava.com/oauth/authorize?client_id=${
      stravaApi.client_id
    }&redirect_uri=${
      stravaApi.redirect_uri
    }&response_type=code&approval_prompt=force`;
    window.location = url;
  };

  togglePom = () => {
    const { togglePomState, currentUser } = this.props;
    togglePomState(!currentUser.pomStatus);
  };

  render() {
    const stravant = 'S†ra√an†';
    const { athlete } = this.props.currentUser.info;
    return (
      <div className="welcome-page">
        <h1 className="welcome-title">{stravant}</h1>
        {athlete && <h2>HI {athlete.firstname}</h2>}
        <i className="fas fa-sign-in-alt" />
        <button onClick={this.handleClick}>login w/strava</button>
        <button onClick={this.togglePom}>POM</button>
        <button onClick={this.retrieveWeeklyStats}>get routes</button>
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
