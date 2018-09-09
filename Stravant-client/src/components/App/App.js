import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ContentRoute from '../../containers/ContentRoute/ContentRoute';
import { NavBar } from '../../containers/NavBar/NavBar';
import Welcome from '../../containers/Welcome/Welcome';
import Chat from '../Chat/Chat';
import SockJS from 'sockjs-client';

// const strava = require('strava-v3');

export class App extends Component {
  constructor(props) {
    super(props);

    const sock = new SockJS('https://localhost:3000');
    sock.onopen = function() {
      console.log('open');
      sock.send('test');
    };

    sock.onmessage = function(e) {
      console.log('message', e.data);
      sock.close();
    };

    sock.onclose = function() {
      console.log('close');
    };
    this.state = {
      actions: sock,
      messages: []
    };
  }

  render() {
    const { currentUser } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Chat {...this.state} />
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
