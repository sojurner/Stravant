import React, { Component } from 'react';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import moment from 'moment';
// import { createActivity } from '../../helpers/apiCalls/apiCalls';
import { PomContainer } from '../../components/PomContainer/PomContainer';
import * as pomActions from '../../actions/pomAction';
import { getLastPomTime } from '../../helpers/helpers/helpers';

import './PomControl.css';

var socket = openSocket('http://localhost:5000');
export class PomControl extends Component {
  constructor() {
    super();
    this.state = {
      mSecond: 0,
      second: 0,
      minute: 0,
      hour: 0,
      start: false,
      stop: true,
      save: false,
      hide: false,
      description: false,
      pomSummary: '',
      socketMessage: ''
    };
  }

  componentDidMount() {
    const { setPomHistory } = this.props;
    if (localStorage.getItem('pomHistory')) {
      const storageItem = JSON.parse(localStorage.getItem('pomHistory'));
      setPomHistory(storageItem);
    }
  }

  togglePom = (event, string) => {
    const { start, hide } = this.state;
    if (start) {
      const toggleHide = !hide;
      this.setState({ hide: toggleHide });
    } else {
      this.sendSocketMsg(event);
      this.setState({ [string]: true, stop: false });
    }
    const { togglePomState, pomInfo } = this.props;
    togglePomState(!pomInfo.pomStatus);
  };

  sendSocketMsg = () => {
    const { firstName } = this.props.currentUser.info;
    socket.emit('pomStart', `${firstName} just started on Pom!`);
  };

  startMSecond = () => {
    let time = this.state.mSecond + 1;
    time < 10
      ? this.setState({ mSecond: time })
      : this.setState({ mSecond: 0 });
  };

  startSecond = () => {
    let time = this.state.second + 1;
    time < 60 ? this.setState({ second: time }) : this.setState({ second: 0 });
  };

  startMinute = () => {
    let time = this.state.minute + 1;
    time < 60 ? this.setState({ minute: time }) : this.setState({ minute: 0 });
  };

  startHour = () => {
    let time = this.state.hour + 1;
    this.setState({ hour: time });
  };

  stopTime = () => {
    const { firstName } = this.props.currentUser.info;
    const { pomHistory } = this.props.pomInfo;
    const timeKeys = Object.keys(pomHistory);
    const lastPom = timeKeys[timeKeys.length - 1];
    const currentTime = moment().format('llll');
    if (lastPom) {
      const difference = getLastPomTime(currentTime, lastPom);
      socket.emit(
        'pomEnd',
        `${firstName} finished the Pom!  Your last pom was ${difference}`
      );
    }
    this.setState({ start: false, stop: true });
  };

  addDescription = string => {
    this.setState({ description: string });
  };

  removeDescription = () => {
    this.setState({ description: '' });
  };

  resetTimer = () => {
    const { setPomHistory } = this.props;
    const { minute, second, hour } = this.state;
    const timeState = {
      second: second,
      minute: minute,
      hour: hour
    };
    if (localStorage.getItem('pomHistory')) {
      const storageItem = JSON.parse(localStorage.getItem('pomHistory'));
      const newItem = {
        ...storageItem,
        [moment().format('llll')]: timeState
      };
      localStorage.setItem('pomHistory', JSON.stringify(newItem));
    } else {
      const itemToStorage = {
        [moment().format('llll')]: timeState
      };
      localStorage.setItem('pomHistory', JSON.stringify(itemToStorage));
    }
    const storageItem = JSON.parse(localStorage.getItem('pomHistory'));
    setPomHistory(storageItem);

    const timeSummary = `${second}s  ${minute}m  ${hour}h`;
    this.setState({
      mSecond: 0,
      second: 0,
      minute: 0,
      hour: 0,
      start: false,
      save: true,
      pomSummary: timeSummary
    });
  };

  removePom = (history, time) => {
    delete history[time];
    this.props.setPomHistory(history);
    localStorage.setItem('pomHistory', JSON.stringify(history));
  };

  render() {
    socket.on('pomClick', msg => {
      this.setState({ socketMessage: msg });
    });
    const { pomHistory } = this.props.pomInfo;
    // const styles = {
    //   pomStyle: {
    //     position: 'absolute',
    //     left: window.screenX + 10,
    //     top: window.screenY - 20
    //   },

    //   summaryStyle: {
    //     position: 'absolute',
    //     left: window.screenX + 25,
    //     top: window.screenY + 90
    //   },

    //   suggestStyle: {
    //     position: 'absolute',
    //     left: window.screenX + 25,
    //     top: window.screenY + 60
    //   },

    //   modalStyle: {
    //     position: 'absolute',
    //     left: window.screenX + 100,
    //     top: window.screenY - 20
    //   }
    // };
    const {
      mSecond,
      second,
      minute,
      hour,
      start,
      stop,
      description,
      hide,
      save,
      pomSummary,
      socketMessage
    } = this.state;
    return (
      <div className="pom-control">
        <h3 className="track-poms">Track Pomodoros</h3>
        <section className="pom-details">
          {socketMessage && <h4 className="socket-msg">{socketMessage}</h4>}
          <i
            class="fas fa-play-circle"
            onMouseEnter={() => this.addDescription('start')}
            onMouseLeave={this.removeDescription}
            onClick={event => {
              this.togglePom(event, 'start');
              if (!start && stop) {
                this.mSeconds = setInterval(this.startMSecond, 101);
                this.seconds = setInterval(this.startSecond, 1001);
                this.minutes = setInterval(this.startMinute, 60001);
                this.hours = setInterval(this.startHour, 3600001);
              }
            }}
          >
            {' '}
          </i>

          {(second > 0 || mSecond > 0 || hour > 0 || minute > 0) &&
            !hide &&
            start && (
              <i
                class="fas fa-stop-circle"
                onClick={() => {
                  this.stopTime();
                  this.removeDescription();
                  if (!stop) {
                    clearInterval(this.mSeconds);
                    clearInterval(this.seconds);
                    clearInterval(this.minutes);
                    clearInterval(this.hours);
                    this.resetTimer();
                  }
                }}
                onMouseEnter={() => this.addDescription('stop')}
                onMouseLeave={this.removeDescription}
              />
            )}

          {(second > 0 || mSecond > 0 || hour > 0 || minute > 0) &&
            !hide &&
            start && (
              <div className="time">
                <span className="hour">
                  {hour}
                  <div className="abbr">h </div>{' '}
                </span>
                <span className="minute">
                  {minute}
                  <div className="abbr">m </div>{' '}
                </span>
                <span className="second">
                  {second}
                  <div className="abbr">s </div>{' '}
                </span>
                <span className="mSecond">{mSecond}</span>
              </div>
            )}
          {!pomHistory && <p>You have no record Poms</p>}
          {description === 'start' &&
            !hide &&
            !start && <p className="pom-instruction">Start Pom?</p>}
          {description === 'start' &&
            !hide &&
            start && <p className="pom-instruction">Hide Pom?</p>}
          {description === 'stop' && (
            <p className="stop-instruction">End Pom?</p>
          )}

          {hide && <p className="stop-instruction">Show Pom?</p>}

          {save && (
            <h4>
              <div>Most recent:</div>
              ---
              {pomSummary}
              ---
            </h4>
          )}
        </section>

        <PomContainer removePom={this.removePom} pomHistory={pomHistory} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  pomInfo: state.pomInfo
});

const mapDispatchToProps = dispatch => ({
  setPomHistory: history => dispatch(pomActions.setPomHistory(history)),
  togglePomState: bool => dispatch(pomActions.togglePomState(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PomControl);
