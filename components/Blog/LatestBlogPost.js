import React from "react";
import Link from "next/link";

const LatestBlogPost = () => {
  return (
    <>
      <div className="blog-area-two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog-details">
                    <img src="/images/blog/blog1.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blogs/kpi-in-revenue-cycle-management">
                      KPIs in Revenue Cycle Management
                    </Link>
                  </h3>
                  <p>
                    Effective revenue cycle management (RCM) is crucial to the
                    financial stability of any healthcare practice. By measuring
                    key performance indicators (KPIs), businesses may better
                    understand their financial operations...
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog-details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Oct 03, 2024
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog-details">
                    <img src="/images/blog/blog2.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blogs/dme-billing">DME Billing Company</Link>
                  </h3>
                  <p>
                    Durable Medical Equipment (DME) billing is a specific area
                    of medical billing that presents its own set of issues,
                    including handling thorough paperwork and negotiating payer
                    requirements. If not managed appropriately...
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog-details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Oct 04, 2024
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blogs/benefits-of-outsourcing-medical-billing">
                    <img src="/images/blog/blog3.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blog-details">
                      Benefits of Outsourcing Medical Billing
                    </Link>
                  </h3>
                  <p>
                    In today's fast-paced healthcare setting, handling the
                    billing process on-site can be time-consuming and costly.
                    Outsourcing medical billing allows healthcare providers to
                    focus...
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog-details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Oct 05, 2024
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
