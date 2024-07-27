import React from "react";
import { FaCheck } from "react-icons/fa6";


const EachFeature = () => {
  return (
    <div className="d-flex gap-2 align-items-center justify-content-start">
      <FaCheck className="checkIcon" />
      <h1 className="xl-normalText">Lorem Ipsum</h1>
    </div>
  );
};

export default EachFeature;
