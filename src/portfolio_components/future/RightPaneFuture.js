import React from "react";
import timekeeper from "../../img/portfolio/timekeeper_729x450.jpg";
import nutrimeasure from "../../img/portfolio/nutrimeasure_722x450.jpg";

const RightPaneCK = () => {
  return (
    <div className="rightPane">
      <div>
        <h4>Timekeeper</h4>
        <img src={timekeeper} alt="Calendar from Timekeeper app" />
      </div>
      <div>
        <h4>Nutrimeasure</h4>
        <img src={nutrimeasure} alt="Nutrimeasure app home page" />
      </div>
    </div>
  );
};

export default RightPaneCK;
