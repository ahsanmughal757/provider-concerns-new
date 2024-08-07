import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ClaimsProcessing from "../components/Services/ClaimsProcessing";

const Page = () => {
	return (
		<>
			<TopHeader />
			<Navbar />
			<PageBanner
				pageTitle="Claims Processing"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				bgImage="/images/services/claims-processing.png"
			/>
			<ClaimsProcessing />
			<Footer />
		</>
	);
};

export default Page;
