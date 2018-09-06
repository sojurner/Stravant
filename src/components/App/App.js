import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { fetchHostCities } from '../../helpers/apiCalls/apiCalls';
import { stravaApi } from '../../data/strava_config';
const strava = require('strava-v3');

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

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

    // strava.athlete.get({ access_token: stravaApi.access_token }, function(
    //   err,
    //   payload,
    //   limits
    // ) {
    //   if (!err) {
    //     console.log(payload);
    //   } else {
    //     console.log(err);
    //   }
    // });

    // const x = strava.oauth.getRequestAccessURL({ scope: '' });
    // strava.oauth.getToken(code, function(err, payload, limits) {
    //   console.log(payload);
    // });
  }

  render() {
    const url = `https://www.strava.com/oauth/authorize/?client_id=${
      stravaApi.client_id
    }&redirect_uri=${stravaApi.redirect_uri}&response_type='code'`;
    const stravant = 'S†ra√an†';

    return (
      <div className="App">
        <h1>{stravant}</h1>
        <a href={url}>login w/strava</a>
      </div>
    );
  }
}

export default App;
