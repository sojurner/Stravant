import React from 'react';
import './PomContainer.css';

export const PomContainer = ({ pomHistory, removePom }) => {
  console.log(pomHistory);
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
};
