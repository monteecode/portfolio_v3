import React from "react";

const LeftPaneTime = () => {
  const handleClick = () => {
    window.open("https://timekeeper-react.herokuapp.com/calendar");
  };
  return (
    <div className="leftPane">
      <h1>Timekeeper</h1>
      <p>Timekeeper calculates start and end times in a span of a month.</p>
      <p>
        Timekeeper features that were developed that allowed for a user to be
        able to do the following:
      </p>
      <h3>Features</h3>
      <ul>
        <li>allows a user to enter and save their start times and end times</li>
        <li>calculate times as a user save their times</li>
      </ul>
      <h3>Technolgies</h3>
      <ul>
        <li>React.js</li>
        <li>Bootstrap</li>
        <li>Redux</li>
        <li>Postgres</li>
        <li>Rails</li>
      </ul>
      <button onClick={handleClick}>SEE LIVE WEBSITE</button>
    </div>
  );
};

export default LeftPaneTime;
