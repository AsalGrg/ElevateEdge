import React from "react";
import "./banner.css";
import SecondaryButton from "../button/SecondaryButton";


const Banner = () => {
  return (
    <section className="banner d-flex gap-5 justify-content-center align-items-center">
      {/* some offer */}
      {/* offer desc pill */}
      <div className="bannerPill px-4 text-center">
        <p className="py-2 normalText">Rocket Boost your Business🚀</p>
      </div>

      <p className='py-2 normalText text-white'>Get 10% Off Your First Order</p>

      <SecondaryButton
      buttonContent={'Get It Now'}
      size={'sm'}
      />
    </section>
  );
};

export default Banner;
