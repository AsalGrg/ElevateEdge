import React, { useState } from "react";
import "./buttons.css";
import Button from "./Button";

const TransparentButton = ({ buttonContent, hasArrow, size }) => {
  return (
    <Button buttonContent={buttonContent} hasArrow={hasArrow} size={size} type={'transparentButton'} />
  );
};

export default TransparentButton;
