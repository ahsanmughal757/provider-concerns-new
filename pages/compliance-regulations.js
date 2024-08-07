import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ComplianceRegulationsContent from "../components/Services/ComplianceRegulationsContent";
import Footer from "../components/_App/Footer";

const Page = () => {
	return (
		<>
			<TopHeader />
			<Navbar />
			<PageBanner
				pageTitle="Compliance With Regulations"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				bgImage="/images/services/billing-and-invoicing.png"
			/>
			<ComplianceRegulationsContent />
			<Footer />
		</>
	);
};

export default Page;
