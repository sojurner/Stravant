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
      code: '',
      showHistory: false,
      data: null,
      error: '',
      toggleBars: false,
      toggleX: false,
      toggleNav: false
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

    this.callBackendApi()
      .then(response => this.setState({ data: response.express }))
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  handleClick = () => {
    const url = `https://www.strava.com/oauth/authorize?client_id=${
      stravaApi.client_id
    }&redirect_uri=${
      stravaApi.redirect_uri
    }&response_type=code&approval_prompt=force`;
    window.location = url;
  };

  callBackendApi = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  signOutUser = () => {
    localStorage.removeItem('code');
    window.location = 'http://localhost:3000/';
  };

  render() {
    const { code, toggleNav, toggleBars } = this.state;
    const stravant = 'S†ra√an†';

    return (
      <BrowserRouter>
        <div className="App">
          {code && <NavBar />}
          <p>{this.state.data}</p>
          <span className="header">
            <h1 className="welcome-title">{stravant}</h1>
            {code && (
              <i class="fas fa-sign-out-alt" onClick={this.signOutUser} />
            )}
          </span>
          {code && <Welcome />}
          {code && <ContentRoute />}
          {window.location.search.length < 16 &&
            !this.props.currentUser.info.accessToken && (
              <span className="logos">
                <img
                  src={
                    'https://cdn.dribbble.com/users/215249/screenshots/2502915/strava-2015.gif'
                  }
                  height="300"
                  width="500"
                  className="home-gif"
                />

                <img
                  src={require('../../images/connect-logo.png')}
                  alt="connect to strava account"
                  height="75"
                  width="250"
                  className="connect-logo"
                  onClick={this.handleClick}
                />
              </span>
            )}
          <div className="required-logo">
            <img
              src={require('../../images/powered-by-strava.png')}
              alt="required strava logo"
              height="40"
              width="150"
              className="strava-powered"
            />
            <i class="fab fa-strava" />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(userActions.setAccessToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
