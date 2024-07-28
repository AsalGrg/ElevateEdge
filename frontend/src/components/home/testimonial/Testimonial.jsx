import React from "react";
import "./testimonial.css";
import TestimonialHighlight from "./TestimonialHighlight";
import EachTestimonial from "./EachTestimonial";
import CourselCust from "../coursel/CourselCust";
const Testimonial = () => {
  return (
    <div className="d-flex flex-column align-item-center container px-3 justify-content-center testimonialContainer gap-5">
      <TestimonialHighlight />
      {/* <div className="d-flex justify-content-evenly gap-4 mt-5">
        <EachTestimonial />
        <EachTestimonial/>
      </div> */}

      <div className="mt-3">
        <CourselCust>
          <EachTestimonial />
          <EachTestimonial />
          <EachTestimonial />
        </CourselCust>
      </div>
    </div>
  );
};

export default Testimonial;
