import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Services from "../components/Services";
import Footer from "../components/_App/Footer";

const Contact = () => {
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
			<Services />
			<Footer />
		</>
	);
};

export default Contact;
