import React, { Component } from 'react';
import { LineChart } from 'react-easy-chart';
import { connect } from 'react-redux';
import './CompareAll.css';

export class CompareAll extends Component {
  constructor() {
    super();
    this.state = {
      xCoordinates: 0,
      yCoordinates: 0,
      dataDisplay: ''
    };
  }

  componentDidMount() {}

  trackMouseCoordinates = event => {
    this.setState({ xCoordinates: event.screenX, yCoordinates: event.screenY });
  };

  render() {
    const datapoints = [
      { Mon: 10 },
      { Tue: 20 },
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ];
    return (
      <div
        className="compare-data-text"
        onMouseMove={this.trackMouseCoordinates}
      >
        {this.state.dataDisplay && <p>{this.state.dataDisplay}</p>}
        <LineChart
          xType={'text'}
          axes
          dataPoints
          grid
          verticalGrid
          width={750}
          height={450}
          interpolate={'cardinal'}
          data={[
            [
              { x: 'Mon', y: 10 },
              { x: 'Tue', y: 20 },
              { x: 'Wed', y: 33 },
              { x: 'Thu', y: 49 },
              { x: 'Fri', y: 60 },
              { x: 'Sat', y: 80 },
              { x: 'Sun', y: 100 }
            ],
            [
              { x: 'Mon', y: 10 },
              { x: 'Tue', y: 30 },
              { x: 'Wed', y: 40 },
              { x: 'Thu', y: 40 },
              { x: 'Fri', y: 50 },
              { x: 'Sat', y: 50 },
              { x: 'Sun', y: 50 }
            ]
          ]}
          clickHandler={data =>
            console.log('clicked') ||
            this.setState({
              dataDisplay: `${data.y} miles`
            })
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = () => {};

const mapStateToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareAll);
