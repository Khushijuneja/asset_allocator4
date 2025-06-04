import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";

import ServicesSection from "./AboutService";


import VideoSection from "./VideoSection";
import Testimonials from "./Testimonials";
import LogoGrid from "./LogoGrid";

import OurServices from "./OurServices";
import FAQSection from "./FAQSection";
import Blogs from "./Blogs";
import OurCorporateServices from "./OurCorporateServices";
import WhyUs from "./WhyUs";

import DepartmentSection from "./Process";
import ReviewContainer from "./ReviewContainer";

const Home = () => {
  return (
     <div>
      <HeroSection />
      <WhyUs />
      <OurCorporateServices />
      <FAQSection />
      <OurServices />

      <Blogs />
      
      {/* <VideoSection /> */}
      {/* <ServicesSection /> */}

    
      <CTA />
      <ReviewContainer />
    </div>
  );
};


export default Home;
