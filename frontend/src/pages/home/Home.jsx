import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Introduction from "../../components/home/introduction/Introduction";
import Expertise from "../../components/home/expertise/Expertise";
import Projects from "../../components/home/projects/Projects";
import Pricing from "../../components/home/pricing/Pricing";

const Home = () => {
  return (
    <main>
      <Banner />
      <Navbar />
      <Introduction />
      <Expertise />
      <Projects/>
      <Pricing/>
    </main>
  );
};
export default Home;
