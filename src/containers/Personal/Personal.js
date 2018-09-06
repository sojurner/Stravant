import React, { Component } from 'react';
import { PieChart } from 'react-easy-chart';
import './Personal.css';

class Personal extends Component {
  constructor() {
    super();
    this.state = {
      showToolTip: false,
      top: '',
      left: '',
      value: '',
      key: ''
    };
  }

  mouseOverHandler = (data, event) => {
    this.setState({
      showToolTip: true,
      top: event.y,
      left: event.x,
      value: data.value,
      key: data.data.key
    });
  };

  mouseMoveHandler = e => {
    if (this.state.showToolTip) {
      this.setState({ top: e.y, left: e.x });
    }
  };

  mouseOutHandler = () => {
    this.setState({ showToolTip: false });
  };

  render() {
    return (
      <div>
        <PieChart
          labels
          className="personal-piechart"
          data={[
            { key: 'Goal', value: 100, color: '#DC143C' },
            { key: 'Current', value: 300, color: '#aaac84' }
          ]}
          innerHoleSize={200}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={event => this.mouseOutHandler(event)}
          mouseMoveHandler={event => this.mouseMoveHandler(event)}
          padding={10}
        />
        {this.state.showToolTip &&
          this.state.key === 'Current' && (
            <p
              className="personal-stats"
              top={this.state.top}
              left={this.state.left}
            >
              Your Pom-meter is {this.state.value} Miles!
            </p>
          )}
        {this.state.showToolTip &&
          this.state.key === 'Goal' && (
            <p
              className="personal-stats"
              top={this.state.top}
              left={this.state.left}
            >
              C'mon {this.state.value} miles left!!
            </p>
          )}
      </div>
    );
  }
}

export default Personal;
