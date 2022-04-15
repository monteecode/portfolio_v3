import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TimekeeperImages from "../../img/portfolio/imglist";
import ZoomImage from "../ZoomImage";
import timekeeperHome from "../../img/portfolio/timekeeper_home.jpg";
import timekeeperDays from "../../img/portfolio/timekeeper_days_868x500.jpg";
import timekeeperDayTime from "../../img/portfolio/timekeeper_day_time_889x500.jpg";
import timekeeperAddTime from "../../img/portfolio/timekeeper_add_time_769x500.jpg";

const RightPaneImg = () => {
  const imgPaths = () => {
    const paths = [
      timekeeperHome,
      timekeeperDays,
      timekeeperDayTime,
      timekeeperAddTime,
    ];
    const test = paths.map((path) => <ZoomImage timeKeeperImg={path} />);
    return test;
  };
  return <div className="rightPane">{imgPaths()}</div>;
};

export default RightPaneImg;
