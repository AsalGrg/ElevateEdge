import { Marquee } from "@devnomic/marquee";
import React from "react";

const WorkedWithBanner = () => {
  return (
    <Marquee 
    fade={true}
    pauseOnHover
    innerClassName=""
    className="workedWithMarquee d-flex align-items-center h-100 justify-content-evenly">
      <div>
        <img src="/worked_companies/AsianPlus.svg" />
      </div>
      <div>
        <img src="/worked_companies/BrandSpark.svg" />
      </div>
      <div>
        <img src="/worked_companies/BysstMusic.svg" />
      </div>
      <div>
        <img src="/worked_companies/BhimTech.svg" />
      </div>
      <div>
        <img src="/worked_companies/ForeverLanding.svg" />
      </div>
    </Marquee>
  );
};

export default WorkedWithBanner;
