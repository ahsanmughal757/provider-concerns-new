import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      
      <PageBanner
        pageTitle="Our Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
        bgImage="/images/services/main.jpg"
      />

      <div className="mt-5">
        <Services showTitle={false} />
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;
