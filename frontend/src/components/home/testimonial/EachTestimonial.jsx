import React from "react";
import Star from "../../star/Star";

const EachTestimonial = () => {
  return (
    <div className="testimonialCard shinyBorder glowBorder d-flex flex-column justify-content-center px-4 gap-4">
      <div className="d-flex gap-2">
        <Star />
        <Star />
        <Star />
        <Star />
      </div>

      <div>
        <p className="lg-normalText text-start">
          “ The service I received exceeded my expectations in every way.the
          level of customer care throughout the process was exceptional. “
        </p>
      </div>

      <div className="d-flex gap-4 align-items-center">
        <img src="/testimonial/brandSparkAvatar.svg" />
        <p className="lg-normalText memberName">
          Brand Spark Visuals
        </p>
      </div>
    </div>
  );
};

export default EachTestimonial;
