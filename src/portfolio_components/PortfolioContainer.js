import React from "react";
import TotoContainer from "./toto/TotoContainer";
import FutureProjects from "./future/FutureProjects";
import Footer from "./Footer";

const PortfolioContainer = () => {
  return (
    <div id="works">
      <TotoContainer />
      <FutureProjects />
      <Footer />
    </div>
  );
};

export default PortfolioContainer;
