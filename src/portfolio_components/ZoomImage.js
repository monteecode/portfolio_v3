import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// import timekeeperHome from "../../img/portfolio/timekeeper_home.jpg";
//import timekeeperHome from "../img/portfolio/timekeeper_home.jpg";

const ZoomImage = (props) => {
  // import timekeeperDays from "../../img/portfolio/timekeeper_days_868x500.jpg";
  // import timekeeperDayTime from "../../img/portfolio/timekeeper_day_time_889x500.jpg";
  // import timekeeperAddTime from "../../img/portfolio/timekeeper_add_time_769x500.jpg";
  return (
    <TransformWrapper
      defaultScale={1}
      defaultPositionX={1}
      defaultPositionY={1}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <div className="imgWrapper">
          <TransformComponent>
            <img src={props.timeKeeperImg} alt="Timekeeper app home page" />
          </TransformComponent>
          <div className="col-lg-12 text-center mb-3">
            <button
              className="btn btn-outline-primary mr-2"
              onClick={() => zoomIn()}
            >
              + Zoom In
            </button>
            <button
              className="btn btn-outline-primary mr-2"
              onClick={() => zoomOut()}
            >
              - Zoom Out
            </button>
          </div>
        </div>
      )}
    </TransformWrapper>
  );
};

export default ZoomImage;
