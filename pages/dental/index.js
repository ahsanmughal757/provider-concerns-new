import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import Stats from "../../components/Dental/Stats";
import Consultation from "../../components/HomeOne/Consultation";
import Services from "../../components/Dental/Services";
import OurExpertise from "../../components/HomeOne/OurExpertise";
import Specialities from "../../components/HomeOne/Specialities";
import Benefits from "../../components/HomeOne/Benefits";
import TestimonialSlider from "../../components/Dental/TestimonialSlider";
import Footer from "../../components/_App/Footer";
import Certifications from "../../components/HomeOne/Certifications";
import DentalSlider from "../../components/Dental/DentalSlider";

const Index = () => {
	return (
		<>
			<TopHeader />

			<Navbar />

			<DentalSlider />

			<Stats />

			<Consultation />

			<Services />

			{/* <OurExpertise /> */}

			{/* <Specialities /> */}

			{/* <Benefits /> */}

			<TestimonialSlider />

			{/* <LatestBlogPost /> */}

			<Certifications />


			<Footer />
		</>
	);
};

export default Index;
