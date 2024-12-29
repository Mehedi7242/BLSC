import React from "react";
import Banner from "./../features/Home/Banner";
import Services from "./../features/Home/Services";
import Testimonials from "./../features/Home/Testimonials";
import CTA from "./../features/Home/CTA";
import WhyChooseUs from "./../features/Home/WhyChooseUs";
import PopularLawyers from "../features/Home/PopularLawyers";



const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <PopularLawyers></PopularLawyers>
      <CTA />
    </div>
  );
};

export default Home;
