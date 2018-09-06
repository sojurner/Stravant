import React, { Component } from 'react';
import { stravaApi } from '../../data/strava_config';

import './Welcome.css';

class Welcome extends Component {
  async componentDidMount() {
    const url = `https://www.strava.com/oauth/authorize/?client_id=${
      stravaApi.client_id
    }&redirect_uri=${stravaApi.redirect_uri}&response_type=code`;
    const options = {
      mode: 'no-cors'
    };
    fetch(url, options).then(res => {
      console.log(res);
    });
  }

  render() {
    const stravant = 'S†ra√an†';
    const url = `https://www.strava.com/oauth/authorize/client_id=${
      stravaApi.client_id
    }&redirect_uri=${stravaApi.redirect_uri}&response_type='code'`;
    return (
      <div className="welcome-page">
        <h1 className="welcome-title">{stravant}</h1>

        <i class="fas fa-sign-in-alt" />
        <a href={url}>login w/strava</a>
      </div>
    );
  }
}
export default Welcome;
