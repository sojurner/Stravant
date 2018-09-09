import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ContentRoute from '../../containers/ContentRoute/ContentRoute';
import { NavBar } from '../../containers/NavBar/NavBar';
import Welcome from '../../containers/Welcome/Welcome';

// const strava = require('strava-v3');

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

  render() {
    const { currentUser } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          {currentUser && <Welcome />}
          {currentUser && <NavBar />}
          {currentUser && <ContentRoute />}
          <img
            className="avatar"
            src="https://boutique.alforme.fr/wp-content/uploads/2017/08/avatar-homme.png"
            height="100"
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser.info
});

export default connect(mapStateToProps)(App);
