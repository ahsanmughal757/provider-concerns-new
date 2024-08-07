import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";

import AboutContent from "../components/About/AboutContent";
import OurExpertise from "../components/HomeOne/OurExpertise";

import Vision from "../components/About/Vision";
import Mission from "../components/About/Mission";
import GoogleMap from "../components/HomeOne/GoogleMap";
import WhatMakesDifferent from "../components/About/WhatMakesDifferent";
import CompanyValues from "../components/About/CompanyValues";
import TestimonialSlider from "../components/Common/TestimonialSlider";

const About = () => {
	return (
		<>
			<TopHeader />

			<Navbar />

			{/* <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="page-title-one"
      /> */}
			<AboutContent />
			<OurExpertise />

			<WhatMakesDifferent />

			{/* <FunFacts /> */}

			{/* <OurExpertise /> */}

			<Vision />

			<Mission />

			<CompanyValues />

			{/* <Services /> */}

			<TestimonialSlider />

			{/* <LatestBlogPost /> */}

			<GoogleMap />

			<Footer />
		</>
	);
};

export default About;
