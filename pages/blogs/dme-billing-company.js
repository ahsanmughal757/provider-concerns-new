import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import LatestBlogPost from "../../components/Blog/LatestBlogPost";
import DMEBilling from "../../components/Blogs/dme-billing";

const Page = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <DMEBilling />

      <Footer />
    </>
  );
};

export default Page;