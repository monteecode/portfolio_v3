import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import timekeeperHome from "../../img/portfolio/timekeeper_home.jpg";
import timekeeperDays from "../../img/portfolio/timekeeper_days_868x500.jpg";
import timekeeperDayTime from "../../img/portfolio/timekeeper_day_time_889x500.jpg";
import timekeeperAddTime from "../../img/portfolio/timekeeper_add_time_769x500.jpg";

const RightPaneImg = () => {
  return (
    <div className="rightPane">
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={100}
      >
        <TransformComponent>
          <img src={timekeeperHome} alt="Timekeeper app home page" />
        </TransformComponent>
      </TransformWrapper>
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
