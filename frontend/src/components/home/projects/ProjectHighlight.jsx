import React from "react";
import SecondaryButton from "../../button/SecondaryButton";

const ProjectHighlight = () => {
  return (
    <div className="mb-5">
      <p className="subHead">Our Projects</p>
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <p className="md-highlight">Missions we’ve accomplished 🚀</p>
        <SecondaryButton
          buttonContent={"View More"}
          hasArrow={true}
          size={"md"}
          hasGlow={true}
        />
      </div>
    </div>
  );
};

export default ProjectHighlight;
