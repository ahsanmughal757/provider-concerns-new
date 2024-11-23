import React from "react";
import Link from "next/link";
import CourseSidebar from "./CourseSidebar";
import CourseForm from "../Forms/CourseForm";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const CourseContent = () => {
  return (
    <>
      <div className="blog-details-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-item">
                <div className="blog-details-img">
                  <img src="/images/blog/blog-details.jpg" alt="Blog" />
                  <h2>Web Applications Development with PHP & Laravel</h2>

                  {/* <ul>
                    <li>
                      <Link href="/blog">
                        <i className="icofont-businessman"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul> */}

                  <h2>Course Brief</h2>
                  <p>
                    Web application development with PHP and Laravel is a course
                    that teaches students how to create custom web applications
                    and websites using the PHP programming language and the
                    Laravel web application framework.
                  </p>
                  <p>
                    PHP is a popular programming language that is commonly used
                    for web development. It is known for its simplicity and
                    flexibility, which makes it well-suited for building
                    dynamic, interactive websites. Laravel is a free,
                    open-source PHP web application framework that is designed
                    to make it easier to build web applications using PHP.
                  </p>

                  <div>
                    <Link href="#course-form" className="btn enroll-btn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5 mb-5">
                <div>
                  <div className="faq-content">
                    <h2 className="fs-5">Week 1</h2>

                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>
                              Introduction to Web Applications Development
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Week 1: Introduction to Web Applications Development
                          </p>
                          <ul>
                            <li>
                              Overview of web applications and the internet
                            </li>
                            <li>Setting up a local development environment</li>
                            <li>Introduction to PHP and Laravel</li>
                            <li>MVC architecture in Laravel</li>
                            <li>Routing and controllers</li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="faq-content">
                    <h2 className="fs-5">Week 2</h2>

                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Laravel Fundamentals</span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>Week 2: Laravel Fundamentals</p>
                          <ul>
                            <li>Blade templates</li>
                            <li>Database and Eloquent ORM</li>
                            <li>Introduction to MySQL</li>
                            <li>Setting up a database in Laravel</li>
                            <li>
                              Using Eloquent ORM to interact with the database
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="faq-content">
                    <h2 className="fs-5">Week 3</h2>

                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Forms and Validation</span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>Week 3: Forms and Validation</p>
                          <ul>
                            <li>Creating and processing forms in Laravel</li>
                            <li>Form validation with Laravel</li>
                            <li>Custom validation rules</li>
                            <li>Authentication and Authorization</li>
                            <li>Setting up authentication in Laravel</li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>

              {/* CourseForm */}
              <CourseForm />
            </div>

            <div className="col-lg-4">
              {/* CourseSidebar */}
              <CourseSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
