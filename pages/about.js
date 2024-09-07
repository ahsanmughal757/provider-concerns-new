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
import Testimonials from "../components/Common/Testimonials";

const About = () => {
	return (
		<>
			<TopHeader />

			<Navbar />

			<AboutContent />
			
			<OurExpertise />

			<WhatMakesDifferent />

			<Vision />

			<Mission />

			<CompanyValues />

			<Testimonials />

			<GoogleMap />

			<Footer />
		</>
	);
};

export default About;
