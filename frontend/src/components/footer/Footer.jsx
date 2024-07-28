import React from "react";
import "./footer.css";
import PrimaryButton from "../button/PrimaryButton";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-first-section d-flex align-items-center">
        <div className="row justify-content-between w-100">
          <div className="d-flex flex-column gap-4 col-3">
            <img src="/logo.svg" alt="" className="w-50" />
            <p className="normalText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>

          <div className="d-flex flex-column gap-4 col-2">
            <p className="xs-highlight">Our Office</p>
            <div className="d-flex flex-column gap-2">
              <p className="mini-highlight">Elevate Edge</p>
              <p className="normalText">
                Baneshwor, Kathmandu Oppostite To Eyeplex Mall
              </p>
            </div>
          </div>

          <div className="d-flex flex-column gap-4 col-5">
            <p className="xs-highlight">Subscribe Now!</p>

            <div className="d-flex gap-4">
              <input
                placeholder="Enter Your Email Here"
                className="emailInput w-100 px-3"
              />

              <PrimaryButton
                buttonContent={"Subscribe"}
                hasGlow={true}
                size={"md"}
                hasArrow={true}
              />
            </div>
            <p className="normalText">
            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-between normalText">
            
            <p>© 2024 Elevate Edge All Right Reserved. </p>

            <div className="d-flex gap-5">
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
                <p>Cookies Settings</p>
            </div>
      </div>
    </div>
  );
};

export default Footer;
