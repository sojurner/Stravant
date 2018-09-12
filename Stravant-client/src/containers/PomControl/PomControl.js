import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { PomContainer } from '../../components/PomContainer/PomContainer';
import * as pomActions from '../../actions/pomAction';
import './PomControl.css';

export class PomControl extends Component {
  constructor() {
    super();
    this.state = {
      mSecond: 0,
      second: 0,
      minute: 0,
      hour: 0,
      start: false,
      save: false,
      showHistory: false,
      description: false,
      pomSummary: ''
    };
  }

  componentDidUpdate() {}

  togglePom = string => {
    const toggledState = !this.state.start;
    if (!this.state.start) {
      this.setState({ [string]: toggledState });
      const { togglePomState, pomInfo } = this.props;
      togglePomState(!pomInfo.pomStatus);
    }
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

  handleDescription = () => {
    const { description } = this.state;
    const toggledDesc = !description;
    this.setState({ description: toggledDesc });
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

  showPoms = () => {
    const { showHistory } = this.state;

    const toggledHistory = !showHistory;
    this.setState({ showHistory: toggledHistory });
  };

  removePom = (history, time) => {
    delete history[time];
    this.props.setPomHistory(history);
    localStorage.setItem('pomHistory', JSON.stringify(history));
  };

  render() {
    const { pomStatus, pomHistory } = this.props.pomInfo;
    const styles = {
      position: 'absolute',
      left: window.screenX + 10,
      top: window.screenY - 20
    };

    const summaryStyle = {
      position: 'absolute',
      left: window.screenX + 25,
      top: window.screenY + 60
    };

    const modal = {
      position: 'absolute',
      left: window.screenX + 100,
      top: window.screenY - 20
    };
    const {
      mSecond,
      second,
      minute,
      hour,
      start,
      showHistory,
      description,
      save,
      pomSummary
    } = this.state;
    return (
      <div>
        {(second > 0 || mSecond > 0 || hour > 0 || minute > 0) &&
          start && (
            <section className="modal" style={modal}>
              <i class="fas fa-window-close" onClick={this.resetTimer} />
              <div className="time">
                <span className="time hour">{hour} h</span>
                <span className="time minute">
                  ..
                  {minute} m
                </span>
                <span className="time second">
                  ..
                  {second} s
                </span>
                <span className="time mSecond">
                  ..
                  {mSecond} ms
                </span>
              </div>
              <div className="save-stop">
                <i
                  class="far fa-hand-paper"
                  onClick={() => {
                    clearInterval(this.mSeconds);
                    clearInterval(this.seconds);
                    clearInterval(this.minutes);
                    clearInterval(this.hours);
                  }}
                />
              </div>
            </section>
          )}
        {save && (
          <h4 style={summaryStyle}>
            <div>Most recent:</div>
            ---
            {pomSummary}
            ---
          </h4>
        )}
        {/* {pomStatus ? (
          <i
            class="far fa-hand-paper"
            onClick={() => {
              this.togglePom();
              clearInterval(this.mSeconds);
              clearInterval(this.seconds);
              clearInterval(this.minutes);
              clearInterval(this.hours);
            }}
          />
        ) : ( */}

        <img
          src={require('../../images/pomodoro-icon.png')}
          style={styles}
          height="100px"
          width="100px"
          className="pomodoro"
          onMouseEnter={this.handleDescription}
          onMouseLeave={this.handleDescription}
          onClick={() => {
            this.togglePom('start');
            this.mSeconds = setInterval(this.startMSecond, 101);
            this.seconds = setInterval(this.startSecond, 1001);
            this.minutes = setInterval(this.startMinute, 60001);
            this.hours = setInterval(this.startHour, 3600001);
          }}
        />

        {!pomHistory && <p>You have no record Poms</p>}
        {!showHistory ? (
          <button onClick={this.showPoms}>Show Poms</button>
        ) : (
          <button onClick={this.showPoms}>Hide</button>
        )}
        {(!second || !mSecond || !hour || !minute) &&
          description && <p className="pom-instruction">Start Pom?</p>}
        {showHistory && (
          <PomContainer
            removePom={this.removePom}
            pomStatus={pomStatus}
            pomHistory={pomHistory}
          />
        )}
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
