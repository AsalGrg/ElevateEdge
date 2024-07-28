import React, { Children } from "react";
import Slider from "react-slick";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import './coursel.css'
export default function CourselCust({ children }) {
  var settings = {
    speed: 500,
    slidesToShow: 1.9,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider
      {...settings}
      className="d-flex justify-content-center align-items-center py-4 ps-2"
      arrows
      centerMode="true"
    >
      {children}
    </Slider>
  );
}

function CustomPrevArrow(props) {
  const {onClick}= props;


  return (
    <div className="customArrowBtn d-flex justify-content-center glowBorder cursor-pointer"
    onClick={onClick}
    >
      <GrLinkPrevious className="align-self-center" />
    </div>
  );
}

function CustomNextArrow(props) {

  const {onClick}= props;

  return (
    <div className="customArrowBtn d-flex justify-content-center glowBorder cursor-pointer"
    onClick={onClick}
    >
      <GrLinkNext className="align-self-center" />
    </div>
  )
}
