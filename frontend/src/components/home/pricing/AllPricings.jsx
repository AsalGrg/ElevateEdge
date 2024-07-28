import React from "react";
import PricingCard from "./PricingCard";

const AllPricings = () => {
  return (
    <div className="row w-100 mt-5 px-4">
      <div className="col-4 d-flex justify-content-center align-items-center">
        <PricingCard />
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center">
        <PricingCard />
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center">
        <PricingCard />
      </div>
    </div>
  );
};

export default AllPricings;
