import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stravaApi } from '../../data/strava_config';
import * as userActions from '../../actions/userAction';
import { exchangeUserToken } from '../../helpers/apiCalls/apiCalls';

import './Welcome.css';
export class Welcome extends Component {
  componentDidMount() {
    const userCode = window.location.search.slice(13, 53);
    this.exchangeToken(userCode);
  }

  exchangeToken = async code => {
    const result = await exchangeUserToken(code);
    if (!result.message) {
      this.props.setAccessToken(result);
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
    console.log(currentUser);
  };

  render() {
    const stravant = 'S†ra√an†';
    return (
      <div className="welcome-page">
        <h1 className="welcome-title">{stravant}</h1>
        <i className="fas fa-sign-in-alt" />
        <button onClick={this.handleClick}>login w/strava</button>
        <button onClick={this.togglePom}>POM</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(userActions.setAccessToken(token)),
  togglePomState: bool => dispatch(userActions.togglePomState(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
