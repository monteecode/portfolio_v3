import React from "react";

const LeftPaneCK = () => {
  const handleClick = () => {
    window.open("https://github.com/monteecode/nutri-measure");
  };
  return (
    <div className="leftPane">
      <h1>Projects In Current Development</h1>
      <h2>Timekeeper</h2>
      <p>Allows a user to enter and calculate their time per day in a month</p>
      <h3>Technolgies</h3>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Ruby on Rails</li>
        <li>Postgres</li>
      </ul>
      <button onClick={handleClick}>Github Repo</button>
      <h2>Nutrimeasure</h2>
      <p>
        A user can look up how much nutrients are in a particular food item.
        This allows the user to understand how much nutrients one can take
        naturally from food to increase their nutrient levels in their bodies.
      </p>
      <h3>Technolgies</h3>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>Postgres</li>
      </ul>
      <button onClick={handleClick}>Github Repo</button>
      https://github.com/monteecode/timekeeper_react
      https://github.com/monteecode/TimeKeeper_API
    </div>
  );
};

export default LeftPaneCK;
