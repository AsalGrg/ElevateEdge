import React from "react";
import ExpertiseCard from "./ExpertiseCard";

const AllExpertises = () => {
  return (
    <div className="row w-100 gy-5 mt-4">
      <div className="col-4 d-flex justify-content-center expertiseCardContainer">
        <ExpertiseCard />
      </div>

      <div className="col-4 d-flex justify-content-center">
        <ExpertiseCard />
      </div>

      <div className="col-4 d-flex justify-content-center">
        <ExpertiseCard />
      </div>

      <div className="col-4 d-flex justify-content-center">
        <ExpertiseCard />
      </div>

      <div className="col-4 d-flex justify-content-center">
        <ExpertiseCard />
      </div>

      <div className="col-4 d-flex justify-content-center">
        <ExpertiseCard />
      </div>
    </div>
  );
};

export default AllExpertises;
