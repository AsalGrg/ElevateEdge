import React from "react";
import TransparentButton from "../../button/TransparentButton";
const ExpertiseCard = () => {
  return (
    <div className="expertiseCard bouncyCard shinyBorder glowBorder position-relative d-flex justify-content-between flex-column">
      <div className="expertiseIconBox d-flex justify-content-center align-items-center">
        <img src="/expertise/trophy.svg" />
      </div>

      <div className="mt-5 h-100 pt-5 pb-3 d-flex justify-content-between px-3 flex-column align-items-start">
        <h1 className="lg-normalText">Lorem Ipsum</h1>
        <h1 className="normalText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </h1>

        <TransparentButton
          buttonContent={"Read More"}
          size={"md"}
          hasArrow={true}
        />
      </div>
    </div>
  );
};

export default ExpertiseCard;
