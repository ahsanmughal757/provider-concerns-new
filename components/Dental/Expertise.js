import React from "react";

const Expertise = () => {
  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-7">
              <div className="speciality-left">
                <div className="section-title-two">
                  <h2>Our Expertise</h2>
                </div>

                <div className="speciality-item">
                  <div className="row m-0">
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Dental Anesthesiology</h3>
                        <p>
                          Tailored billing for dental anesthesiologists,
                          ensuring accurate claims for sedation and pain
                          management.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Dental Public Health</h3>
                        <p>
                          Streamlined billing for dental public health, focusing
                          on community oral health and preventive care.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Pediatric Dentistry</h3>
                        <p>
                          Simplified billing for pediatric dentists, ensuring
                          smooth reimbursement for child dental care.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Oral and Maxillofacial Surgery</h3>
                        <p>
                          Precision billing for oral and maxillofacial surgeons,
                          managing surgical claims with expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 pr-0">
              <div className="speciality-item speciality-right">
                <img src="/images/dental/front-image.png" alt="Speciality" />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>Emergency Call</h3>
                  <p>+1 (888) 285-2880</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
