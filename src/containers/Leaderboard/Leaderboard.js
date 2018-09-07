import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Leaderboard.css';

class LeaderBoard extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Distance (meters)</th>
            <th>Followers</th>
          </tr>
          <tr>
            <td>Paul</td>
            <td>20</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Paul</td>
            <td>20</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Paul</td>
            <td>20</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default LeaderBoard;
