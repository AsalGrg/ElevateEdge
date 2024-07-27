import React, { useState } from "react";
import "./buttons.css";
import Button from "./Button";

const SecondaryButton = ({ buttonContent, hasArrow, size , hasGlow, isFullWidth}) => {
  return (
    <Button buttonContent={buttonContent} hasArrow={hasArrow} size={size} type={'secondaryButton'} hasGlow={hasGlow} isFullWidth={isFullWidth}/>
  );
};

export default SecondaryButton;
