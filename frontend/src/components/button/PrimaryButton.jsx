import React, { useState } from "react";
import "./buttons.css";
import Button from "./Button";

const PrimaryButton = ({ buttonContent, hasArrow, size, hasGlow,isFullWidth }) => {
  return (
    <Button buttonContent={buttonContent} hasArrow={hasArrow} size={size} type={'primaryButton'} hasGlow={hasGlow} isFullWidth={isFullWidth}/>
  );
};

export default PrimaryButton;
