import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import './navbar.css';

const Navbar = () => {
  return (
    <section
      className="mt-4 container"
      style={{
        height: "90px",
      }}
    >
        <div
          className="navbar h-100 shinyBorder d-flex justify-content-center align-items-center px-3"
        >
          <div className="d-flex justify-content-evenly w-100">

            <div className="">
                <img src="/logo.svg"></img>
            </div>

            <div className="d-flex justify-content-between navlinks w-50 align-items-center">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">Services</p>
                <p className="cursor-pointer">Pages</p>
                <p className="cursor-pointer">Contact Us</p>
            </div>

            <div className="">
                <PrimaryButton buttonContent={`Let's Talk`} size={'sm'} hasArrow={true} hasGlow={true}/>
            </div>

          </div>
        </div>
    </section>
  );
};

export default Navbar;
