import React from "react";
import "./expertise.css";
import ExpertiseHighlight from "./ExpertiseHighlight";
import AllExpertises from "./AllExpertises";
const Expertise = () => {
  return (
    <section className="expertiseContainer container px-3 d-flex justify-content-center flex-column gap-5">
      <ExpertiseHighlight/>
      <AllExpertises/>
    </section>
  );
};

export default Expertise;
