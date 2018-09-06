import React, { Component } from 'react';
import { LineChart } from 'react-easy-chart';
import { connect } from 'react-redux';

export class CompareAll extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <LineChart
          xType={'text'}
          axes
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
