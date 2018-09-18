import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as userActions from '../../actions/userAction';
import * as apiCalls from '../../helpers/apiCalls/apiCalls';
import * as scrape from '../../helpers/helpers/helpers';

import './Welcome.css';
export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      greeting: true
    };
  }

  componentDidMount() {
    this.exchangeToken(window.location.search);
  }

  exchangeToken = async url => {
    const codeIndex = url.indexOf('code') + 5;
    const lastIndex = url.lastIndexOf('&');
    const code = url.slice(codeIndex, lastIndex);
    const result = await apiCalls.exchangeUserToken(code);
    if (!result.message) {
      this.props.setAccessToken(result);
    }
    localStorage.setItem('code', JSON.stringify({ code }));
  };

  render() {
    const { info } = this.props.currentUser;

    return (
      <div className="welcome-page">
        <span>
          {info &&
            info.gender === 'M' && (
              <img
                className="avatar"
                src={require('../../images/male-avatar.png')}
                height="70"
                width="70"
              />
            )}
          {info &&
            info.gender === 'F' && (
              <img
                className="avatar"
                src={require('../../images/female-avatar.png')}
                height="100"
                width="100"
              />
            )}
          <h4 className="speech-bubble">Hi {info.firstName}</h4>
        </span>
      </div>
    );
  }
}

const { object, func } = PropTypes;

Welcome.propTypes = {
  currentUser: object,
  setAccessToken: func
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(userActions.setAccessToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
