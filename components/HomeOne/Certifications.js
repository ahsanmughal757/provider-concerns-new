import React from "react";
import Image from "next/image";

const styleOne = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "200px",
  width: "100%",
};

const Certifications = () => {
  return (
    <div className="container  my-5">
      <div className="row">
        <div className="section-title">
          <h2>Trusted By</h2>
        </div>
        {/* <div> */}
        <div className="col-lg-4 d-flex justify-content-center align-items-center my-4">
          <Image
            src="/certifications/AAPC - logo.png"
            alt="Certifications"
            width={150}
            height={120}
          />
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center my-4">
          <Image
            src="/certifications/Google_reviews.png"
            alt="Certifications"
            width={160}
            height={80}
          />
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center my-4">
          <Image
            src="/certifications/HIPAA - logo.png"
            alt="Certifications"
            width={140}
            height={130}
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Certifications;
