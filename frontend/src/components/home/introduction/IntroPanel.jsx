import React from "react";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryButton from "../../button/SecondaryButton";

const IntroPanel = () => {
  return (
    <div className="w-50 mt-4">
      <p className="normalText text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat duis aute irure dolor in.
      </p>

      <div className="mt-5 d-flex justify-content-center gap-5">
        <PrimaryButton
          buttonContent={"View Work"}
          hasArrow={true}
          size={"md"}
          hasGlow={true}
        />

        <SecondaryButton
          buttonContent={"View Work"}
          hasArrow={false}
          size={"md"}
          hasGlow={true}
        />
      </div>
    </div>
  );
};

export default IntroPanel;
