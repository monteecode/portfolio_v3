import React from "react";
import timekeeperHome from "../../img/portfolio/timekeeper_home_762x500.jpg";
import timekeeperDays from "../../img/portfolio/timekeeper_days_868x500.jpg";
import timekeeperDayTime from "../../img/portfolio/timekeeper_day_time_889x500.jpg";
import timekeeperAddTime from "../../img/portfolio/timekeeper_add_time_769x500.jpg";

const RightPaneImg = () => {
  return (
    <div className="rightPane">
      <div>
        <img src={timekeeperHome} alt="Timekeeper app home page" />
      </div>
      <div>
        <img src={timekeeperDays} alt="Atlanta and Atlanta Information" />
      </div>
      <div>
        <img src={timekeeperDayTime} alt="Atlanta data on essential costs" />
      </div>
      <div>
        <img src={timekeeperAddTime} alt="Atlanta data on weather" />
      </div>
    </div>
  );
};

export default RightPaneImg;
