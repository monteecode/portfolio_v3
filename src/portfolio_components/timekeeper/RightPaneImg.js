import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomImage from "../ZoomImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timekeeperHome from "../../img/portfolio/timekeeper_home.jpg";
import timekeeperDays from "../../img/portfolio/timekeeper_days_868x500.jpg";
import timekeeperDayTime from "../../img/portfolio/timekeeper_day_time_889x500.jpg";
import timekeeperAddTime from "../../img/portfolio/timekeeper_add_time_769x500.jpg";

const RightPaneImg = () => {
  return (
    <div className="rightPane">
      {/* <ZoomImage /> */}
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={1}
        defaultPositionY={1}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <div className="imgWrapper">
            <TransformComponent>
              <img src={timekeeperHome} alt="Timekeeper app home page" />
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
