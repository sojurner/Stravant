import React, { Component } from 'react';
import { ContentRoute } from '../ContentRoute/ContentRoute';
import { NavBar } from '../NavBar/NavBar';
import Welcome from '../Welcome/Welcome';
import { stravaApi } from '../../data/strava_config';

import CompareAll from '../../containers/CompareAll/CompareAll';
const strava = require('strava-v3');

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

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

  render() {
    return (
      <div className="App">
        <Welcome />
        <NavBar />
        <ContentRoute />
        <img
          className="avatar"
          src="https://boutique.alforme.fr/wp-content/uploads/2017/08/avatar-homme.png"
          height="100"
        />
      </div>
    );
  }
}

export default App;
