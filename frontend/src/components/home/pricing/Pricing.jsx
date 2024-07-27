import React from "react";
import "./pricing.css";
import PricingHighlight from "./PricingHighlight";
import AllPricings from "./AllPricings";

const Pricing = () => {
  return (
    <section className="pricingContainer d-flex flex-column align-items-center justify-content-center gap-5">
      <PricingHighlight />
      <AllPricings />
    </section>
  );
};

export default Pricing;
