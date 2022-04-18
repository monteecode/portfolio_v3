import React from "react";
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
    const compImgPaths = paths.map((path) => (
      <ZoomImage timeKeeperImg={path} />
    ));
    return compImgPaths;
  };
  return <div className="rightPane">{imgPaths()}</div>;
};

export default RightPaneImg;
