import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BillingInvoicingContent from "../components/Services/BillingInvoicingContent";
import Footer from "../components/_App/Footer";

const Page = () => {
	return (
		<>
			<TopHeader />
			<Navbar />
			<PageBanner
				pageTitle="Patient Billing & Invoicing Solutions"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				bgImage="/images/services/billing-and-invoicing.png"

			/>
			<BillingInvoicingContent />
			<Footer />
		</>
	);
};

export default Page;
