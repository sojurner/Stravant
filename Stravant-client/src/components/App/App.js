import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ContentRoute from '../../containers/ContentRoute/ContentRoute';
import { NavBar } from '../../containers/NavBar/NavBar';
import Welcome from '../../containers/Welcome/Welcome';
import * as userActions from '../../actions/userAction';
import { stravaApi } from '../../data/strava_config';
import './App.css';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      code: ''
    };
  }

  componentDidMount() {
    const { search } = window.location;
    const codeIndex = search.indexOf('code') + 5;
    const lastIndex = search.lastIndexOf('&');
    if (search.includes('code')) {
      this.setState({ code: search.slice(codeIndex, lastIndex) });
    }
    if (localStorage.getItem('code')) {
      const codeValue = JSON.parse(localStorage.getItem('code'));
      const refreshUrl = `http://localhost:3000/?state=&code=${codeValue}&scope=`;

      window.location.reload(refreshUrl);
      localStorage.removeItem('code');
    }
  }

  handleClick = () => {
    const url = `https://www.strava.com/oauth/authorize?client_id=${
      stravaApi.client_id
    }&redirect_uri=${
      stravaApi.redirect_uri
    }&response_type=code&approval_prompt=force`;
    window.location = url;
  };

  render() {
    const { currentUser } = this.props;
    const localStore = localStorage.getItem('code');
    const stravant = 'S†ra√an†';

    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="welcome-title">{stravant}</h1>
          {this.state.code && <Welcome />}
          {this.state.code && <NavBar />}
          {this.state.code && <ContentRoute />}
          {currentUser &&
            currentUser.gender === 'M' && (
              <img
                className="avatar"
                src={require('../../images/male-avatar.png')}
                height="100"
              />
            )}
          {currentUser &&
            currentUser.gender === 'F' && (
              <img
                className="avatar"
                src={require('../../images/female-avatar.png')}
                height="100"
              />
            )}

          {!window.location.search.includes('code') && (
            <span>
              <img
                src={require('../../images/connect-logo.png')}
                height="50"
                width="200"
                className="connect-logo"
                onClick={this.handleClick}
              />
              <img
                src={require('../../images/powered-by-strava.png')}
                height="70"
                width="250"
                className="strava-powered"
              />
              <i class="fab fa-strava" />
            </span>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser.info
});

const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(userActions.setAccessToken(token)),
  togglePomState: bool => dispatch(userActions.togglePomState(bool)),
  setWeeklyStats: stats => dispatch(userActions.setWeeklyStats(stats))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
