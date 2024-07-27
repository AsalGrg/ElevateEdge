import React from "react";
import EachFeature from "./EachFeature";
import SecondaryButton from "../../button/SecondaryButton";

const PricingCard = () => {
  return (
    <div className="pricingCard bouncyCard p-4 glowBorder d-flex justify-content-between flex-column">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column gap-2">
          <h1 className="sm-highlight">Basic</h1>
          <h1 className="normalText text-secondary text-gray-cust">
            For Individuals
          </h1>
        </div>
        <div className="pricingIconBox d-flex justify-content-center">
          <img src="/pricing/Basic.svg" />
        </div>
      </div>

      <div className="d-flex gap-4 flex-column">
        <EachFeature />
        <EachFeature />
        <EachFeature />
        <EachFeature />
      </div>

      <div className="d-flex flex-column gap-5">
        <div className="d-flex align-items-center gap-3">
          <h1 className="md-highlight text-purple-cust">$445</h1>
          <h1 className="lg-normalText text-purple-cust">Upgrade Anytime</h1>
        </div>

        <div className="align-self-center w-75">
          <SecondaryButton
            buttonContent={"Get Started"}
            hasArrow={true}
            size={"md"}
            isFullWidth={true}
            hasGlow={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
