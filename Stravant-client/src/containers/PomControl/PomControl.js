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
      save: false,
      showHistory: false,
      description: false
    };
  }

  componentDidUpdate() {
    console.log(this.state.showHistory);
  }

  togglePom = string => {
    this.setState({ save: false });
    const { togglePomState, pomInfo } = this.props;
    togglePomState(!pomInfo.pomStatus);
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
    this.setState({ mSecond: 0, second: 0, minute: 0, hour: 0, save: true });
  };

  showPoms = () => {
    const { setPomHistory } = this.props;
    if (localStorage.getItem('pomHistory')) {
      const storageItem = JSON.parse(localStorage.getItem('pomHistory'));
      const newItem = { ...storageItem, [moment().format('llll')]: this.state };
      localStorage.setItem('pomHistory', JSON.stringify(newItem));
    } else {
      const itemToStorage = { [moment().format('llll')]: this.state };
      localStorage.setItem('pomHistory', JSON.stringify(itemToStorage));
    }
    const storageItem = JSON.parse(localStorage.getItem('pomHistory'));
    setPomHistory(storageItem);
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
    const {
      mSecond,
      second,
      minute,
      hour,
      greeting,
      showHistory,
      description,
      save
    } = this.state;
    return (
      <div>
        {(second > 0 || mSecond > 0 || hour > 0 || minute > 0) && (
          <span>
            <i
              class="far fa-hand-paper"
              onClick={() => {
                this.togglePom('stop');
                clearInterval(this.mSeconds);
                clearInterval(this.seconds);
                clearInterval(this.minutes);
                clearInterval(this.hours);
              }}
            />
            {
              <button className="reset-time" onClick={this.resetTimer}>
                Save!
              </button>
            }
            <h4 className="modal-timer">
              <span className="time hour">{hour}</span>
              :h~
              <span className="time minute">{minute}</span>
              :m~
              <span className="time second">{second}</span>
              :s~
              <span className="time mSecond">{mSecond}</span>
              :ms~
            </h4>
          </span>
        )}
        {save && (
          <h4>
            That was a {hour}
            h, {minute}
            m, {second}s POM!!
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
        {!pomStatus && (
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
        )}

        <button onClick={this.showPoms}>Show Poms</button>

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
