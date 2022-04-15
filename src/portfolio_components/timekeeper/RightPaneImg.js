import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TimekeeperImages from "../../img/portfolio/imglist";
import ZoomImage from "../ZoomImage";
import timekeeperHome from "../../img/portfolio/timekeeper_home.jpg";
import timekeeperDays from "../../img/portfolio/timekeeper_days_868x500.jpg";
import timekeeperDayTime from "../../img/portfolio/timekeeper_day_time_889x500.jpg";
import timekeeperAddTime from "../../img/portfolio/timekeeper_add_time_769x500.jpg";

const RightPaneImg = () => {
  return (
    <div className="rightPane">
      <ZoomImage timeKeeperImg={timekeeperHome} />
      <ZoomImage timeKeeperImg={timekeeperDays} />
      <ZoomImage timeKeeperImg={timekeeperDayTime} />
      <ZoomImage timeKeeperImg={timekeeperAddTime} />
    </div>
  );
};

export default RightPaneImg;
