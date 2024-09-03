import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import LatestBlogPost from "../components/Blog/LatestBlogPost";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";
import CourseContent from "../components/Course/CourseContent";

const TakeCourse = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <CourseContent />

      <Footer />
    </>
  )
}

export default TakeCourse
