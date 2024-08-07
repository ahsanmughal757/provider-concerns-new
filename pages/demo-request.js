import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Consultation from "../components/HomeOne/Consultation";
import Footer from "../components/_App/Footer";
import AboutContent from "../components/About/AboutContent";
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
			<PageBanner
				pageTitle="Demo Request"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				bgImage="/images/demo.png"
			/>
			<Consultation />
			<WhatMakesDifferent />
			<CompanyValues />
			<Footer />
		</>
	);
};

export default About;
