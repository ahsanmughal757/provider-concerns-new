import React from "react";
import Link from "next/link";

const CourseSidebar = () => {
  return (
    <>
      <div className="blog-details-item">
        <div className="blog-details-search">
          <form>
            <input type="text" className="form-control" placeholder="Search" />
            <button type="submit" className="btn blog-details-btn">
              <i className="icofont-search-1"></i>
            </button>
          </form>
        </div>

        <div className="blog-details-recent">
          <h3>Other Courses</h3>
          <ul>
            {/* <li>
              <img src="/images/blog/blog1.jpg" alt="Recent" />
              <Link href="/blog-details">
                World AIDS Day, designated on 1 December.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Jan 03, 2022
                </li>
              </ul>
            </li>
            <li>
              <img src="/images/blog/blog2.jpg" alt="Recent" />
              <Link href="/blog-details">
                World AIDS Day, designated on 1 December.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Jan 03, 2022
                </li>
              </ul>
            </li>
            <li>
              <img src="/images/blog/blog3.jpg" alt="Recent" />
              <Link href="/blog-details">
                World AIDS Day, designated on 1 December.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Jan 03, 2022
                </li>
              </ul>
            </li> */}
            No other courses.
          </ul>
        </div>

        <div className="blog-details-category">
          <h3>Category</h3>
          <ul>
            <li>
              <Link href="/take-course">Health Care</Link>
            </li>
            <li>
              <Link href="/take-course">Medical science</Link>
            </li>
            <li>
              <Link href="/take-course">Daily lifestyle</Link>
            </li>
            <li>
              <Link href="/take-course">Medicine</Link>
            </li>
            <li>
              <Link href="/take-course">Mordern Technology</Link>
            </li>
            <li>
              <Link href="/take-course">Cancer Research</Link>
            </li>
            <li>
              <Link href="/take-course">BioInformatics</Link>
            </li>
            <li>
              <Link href="/take-course">Hospital Events</Link>
            </li>
            <li>
              <Link href="/take-course">Student Succses</Link>
            </li>
          </ul>
        </div>

        {/* <div className="blog-details-tags">
          <h3>Tags</h3>
          <ul>
            <li>
              <Link href="/blog">Dental</Link>
            </li>
            <li>
              <Link href="/blog">Health</Link>
            </li>
            <li>
              <Link href="/blog">Child</Link>
            </li>
            <li>
              <Link href="/blog">Medicine</Link>
            </li>
            <li>
              <Link href="/blog">Caveti</Link>
            </li>
            <li>
              <Link href="/blog">AIDS</Link>
            </li>
            <li>
              <Link href="/blog">Dental</Link>
            </li>
            <li>
              <Link href="/blog">Health</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default CourseSidebar;
