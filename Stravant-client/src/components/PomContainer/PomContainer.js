import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePom } from '../../actions/pomAction';

import './PomContainer.css';

export class PomContainer extends Component {
  render() {
    const { pomHistory, removePom } = this.props;

    const pomContainer = Object.keys(pomHistory).map(time => {
      const pomTime = `${pomHistory[time].second}sec ${
        pomHistory[time].minute
      }min ${pomHistory[time].hour}hour`;
      return (
        <div className="pom-cards">
          <i
            class="fas fa-trash-alt"
            onClick={() => removePom(pomHistory, time)}
          />
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
