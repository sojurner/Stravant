import React, { Component } from 'react';
import ContentRoute from '../../containers/ContentRoute/ContentRoute';
import { NavBar } from '../../containers/NavBar/NavBar';
import Welcome from '../../containers/Welcome/Welcome';
import { stravaApi } from '../../data/strava_config';

import CompareAll from '../../containers/CompareAll/CompareAll';
const strava = require('strava-v3');

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

  render() {
    return (
      <div className="App">
        )<Welcome />
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
