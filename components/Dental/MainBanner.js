import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-item">
                <h1>Expert Dental Billing Services</h1>
                <p>
                  We revolutionize dental practices by ensuring financial
                  success through innovative billing solutions, optimizing
                  billing procedures and enhancing profits.
                </p>

                <div className="common-btn">
                  <Link
                    href="/appointment"
                    className="call-btn-two"
                  >
                    Click to Call
                  </Link>
                  <Link
                    href="/about"
                    className="cmn-btn-right"
                  >
                    Make Appointment
                  </Link>
                </div>

                <div className="banner-right">
                  <img
                    src="/images/home-three/home-three-banner1.png"
                    alt="Banner"
                  />
                  <img
                    src="/images/home-three/home-three-banner-shape2.png"
                    alt="Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
