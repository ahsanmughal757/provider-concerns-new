import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/HomeOne/HeroSlider";
import Stats from "../components/HomeOne/Stats";
import Consultation from "../components/HomeOne/Consultation";
import Services from "../components/HomeOne/Services";
import OurExpertise from "../components/HomeOne/OurExpertise";
import Specialities from "../components/HomeOne/Specialities";
import Benefits from "../components/HomeOne/Benefits";
import Footer from "../components/_App/Footer";
import Certifications from "../components/HomeOne/Certifications";
import Testimonials from "../components/Common/Testimonials";
import LatestBlogPost from "../components/Blog/LatestBlogPost";

const Index = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <HeroSlider />

      <Stats />

      <Consultation />

      <Services />

      <OurExpertise />

      <Specialities />

      <Benefits />

      <Testimonials />

      <LatestBlogPost />

      <Certifications />

      <Footer />
    </>
  );
};

export default Index;
