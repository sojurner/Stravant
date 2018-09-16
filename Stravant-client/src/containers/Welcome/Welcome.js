import React, { Component } from 'react';
import { connect } from 'react-redux';
import PomControl from '../PomControl/PomControl';
import * as userActions from '../../actions/userAction';

import * as apiCalls from '../../helpers/apiCalls/apiCalls';
import * as scrape from '../../helpers/helpers/helpers';

import './Welcome.css';
export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: {},
      greeting: true
    };
  }

  componentDidMount() {
    const { search } = window.location;
    const codeIndex = search.indexOf('code') + 5;
    const lastIndex = search.lastIndexOf('&');
    const userCode = search.slice(codeIndex, lastIndex);
    this.exchangeToken(userCode);
  }

  exchangeToken = async code => {
    const result = await apiCalls.exchangeUserToken(code);
    if (!result.message) {
      const scrapedUserInfo = scrape.userInfo(result);
      this.props.setAccessToken(scrapedUserInfo);
    }
    localStorage.setItem('code', JSON.stringify({ code }));
  };

  handleClick = (e, str) => {
    console.log(e);
    const coord = {
      position: 'absolute',
      left: e.pageX + 30,
      top: e.pageY - 50
    };
    if (str === 'remove') {
      this.setState({ greeting: false });
    } else {
      this.setState({
        greeting: true,
        coordinates: coord
      });
    }
  };

  render() {
    const { info } = this.props.currentUser;
    const { greeting } = this.state;
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
                // onClick={e => this.handleClick(e, 'show')}
                // onMouseEnter={this.handleClick}
                // onMouseOut={e => this.handleClick(e, 'remove')}
              />
            )}
          {info &&
            info.gender === 'F' && (
              <img
                className="avatar"
                src={require('../../images/female-avatar.png')}
                height="100"
                width="100"
                onClick={this.handleClick}
              />
            )}
          {greeting && <h4 className="speech-bubble">Hi {info.firstName}</h4>}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  pomStatus: state.pomStatus
});

const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(userActions.setAccessToken(token)),
  setWeeklyStats: stats => dispatch(userActions.setWeeklyStats(stats))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
