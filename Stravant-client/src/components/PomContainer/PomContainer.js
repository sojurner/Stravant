import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePom } from '../../actions/pomAction';

import './PomContainer.css';

export class PomContainer extends Component {
  render() {
    const { pomHistory, removePom } = this.props;
    const pomContainer = Object.keys(pomHistory).map(time => {
      const pomTime = ` ${pomHistory[time].hour}h ${pomHistory[time].minute}m ${
        pomHistory[time].second
      }s`;
      return (
        <div className="pom-cards">
          <i class="fab fa-xbox" onClick={() => removePom(pomHistory, time)} />
          <h4>{time} </h4>
          <p>{pomTime}</p>
        </div>
      );
    });
    return <div className="pom-container">{pomContainer}</div>;
  }
}

const mapStateToProps = state => ({
  pomHistory: state.pomInfo.pomHistory
});

const mapDispatchToProps = dispatch => ({
  removePom: (history, time) => dispatch(removePom(history, time))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PomContainer);
