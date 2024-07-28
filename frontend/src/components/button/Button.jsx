import React, { useState } from "react";
import "./buttons.css";

const Button = ({ buttonContent, hasArrow, size, type, hasGlow, isFullWidth }) => {
  let width;
  let height;
  let imageSize;
  let style;
  let fsize;

  if (size === "sm") {
    width = "110px";
    height = "36px";
    imageSize = "13px";
    fsize = "15px";
  } else if (size === "md") {
    width = "150px";
    height = "54px";
    imageSize = "15px";
    fsize = "20px";
  } else if (size === "lg") {
    width = "250px";
    height = "70px";
    imageSize = "18px";
    fsize = "23px";
  }

  style = {
    minHeight: height,
    minWidth: width,
    borderRadius: "8px",
    fontSize: fsize,
  };

  const [isHovered, setisHovered] = useState(false);

  const buttonClass = type === "transparentButton" ? null : "button";
  const hasGlowEffect = hasGlow? 'glowBorder': null
  const isBtnFullWidth = isFullWidth? 'w-100': null
  return (
    <button
      className={
        type +
        " d-flex justify-content-center align-items-center gap-2 " +
        buttonClass+" "+ hasGlowEffect+" "+isBtnFullWidth
      }
      style={style}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      {buttonContent}
      {hasArrow && type === "primaryButton" && (
        <img
          src={!isHovered ? "/ArrowUp.svg" : "/ArrowDown.svg"}
          style={{
            width: imageSize,
          }}
        />
      )}

      {hasArrow && type === "secondaryButton" && (
        <img
          src={!isHovered ? "/ArrowUp2.svg" : "/ArrowDown2.svg"}
          style={{
            width: imageSize,
          }}
        />
      )}

      {hasArrow && type === "transparentButton" && (
        <img
          src={!isHovered ? "/ArrowUp2.svg" : "/ArrowDown2.svg"}
          style={{
            width: imageSize,
          }}
        />
      )}
    </button>
  );
};

export default Button;
