import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/Dental/Navbar";
import MainBanner from "../../components/Dental/MainBanner";
import Expertise from "../../components/Dental/Expertise";
import OurServices from "../../components/Dental/OurServices";
import Stats from "../../components/Dental/Stats";
import Footer from "../../components/_App/Footer";
import Consultation from "../../components/HomeOne/Consultation";
import Certifications from "../../components/HomeOne/Certifications";
import Testimonials from "../../components/Common/Testimonials";

const Index3 = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <MainBanner />

      <div className="pb-100">
        <Stats />
      </div>

      <Consultation />

      <Expertise />

      <OurServices />

      {/* <Testimonials /> */}

      <Certifications />

      <Footer />
    </>
  );
};

export default Index3;
