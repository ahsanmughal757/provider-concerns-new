import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import LatestBlogPost from "../components/Blog/LatestBlogPost";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";

const BlogDetails = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <BlogDetailsContent />

      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default BlogDetails;