import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import BlogGrid from "../components/Blog/BlogGrid";

const Blog = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <BlogGrid />

      <Footer />
    </>
  );
};

export default Blog;
