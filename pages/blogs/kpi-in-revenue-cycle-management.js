import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import LatestBlogPost from "../../components/Blog/LatestBlogPost";
import KpiInRevenue from "../../components/Blogs/kpi-in-rev";

const Page = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <KpiInRevenue />

      <Footer />
    </>
  );
};

export default Page;