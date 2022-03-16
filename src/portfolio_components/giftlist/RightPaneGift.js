import React from "react";
import totoHome from "../../img/portfolio/toto_home_729x450.png";
import atlDesc from "../../img/portfolio/toto_atl_desc_580x450.png";
import atlEss from "../../img/portfolio/toto_atl_ess_729x450.jpg";
import atlWeather from "../../img/portfolio/toto_atl_weather_576x450.jpg";

const RightPaneGift = () => {
  return (
    <div className="rightPane">
      <div>
        <img src={totoHome} alt="Toto app home page" />
      </div>
      <div>
        <img src={atlDesc} alt="Atlanta and Atlanta Information" />
      </div>
      <div>
        <img src={atlEss} alt="Atlanta data on essential costs" />
      </div>
      <div>
        <img src={atlWeather} alt="Atlanta data on weather" />
      </div>
    </div>
  );
};

export default RightPaneGift;
