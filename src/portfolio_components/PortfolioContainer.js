import React from "react";
import TotoContainer from "./toto/TotoContainer";
import FutureProjects from "./future/FutureProjects";
import TimekeeperContainer from "./timekeeper/TimekeeperContainer";
import Footer from "./Footer";

const PortfolioContainer = () => {
  return (
    <div id="works">
      <TotoContainer />
      <TimekeeperContainer />
      <FutureProjects />
      <Footer />
    </div>
  );
};

export default PortfolioContainer;
