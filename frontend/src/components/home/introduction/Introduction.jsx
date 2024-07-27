import React from "react";
import "./introduction.css";
import IntroHighlight from "./IntroHighlight";
import IntroPanel from "./IntroPanel";
import WorkedWithBanner from "./WorkedWithBanner";
const Introduction = () => {
  return (
    <section className="introduction d-flex justify-content-between flex-column">
      <div className="d-flex align-items-center justify-content-end flex-column h-100 highlighterContainer">
        <IntroHighlight />
        <IntroPanel />
      </div>
      <div className="">
        <WorkedWithBanner/>
      </div>
    </section>
  );
};

export default Introduction;
