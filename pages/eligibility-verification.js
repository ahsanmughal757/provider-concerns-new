import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import EligibilityVerification from "../components/Services/EligibilityVerification";
import Footer from "../components/_App/Footer";

const Page = () => {
	return (
		<>
			<TopHeader />
			<Navbar />
			<PageBanner
				pageTitle="Eligibility Verification"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				bgImage="/images/services/eligibility-verification.png"
			/>
			<EligibilityVerification />
			<Footer />
		</>
	);
};

export default Page;
