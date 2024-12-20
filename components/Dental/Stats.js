import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial={{
          y: -100,
          zIndex: 100,
        }}
        whileInView={{
          y: 50,
          width: "100%",
          zIndex: 100,
          position: "relative",
        }}
        className="counter-area"
      >
        <div className="container">
          <div className="row counter-bg">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-patient-bed"></i> */}
                <h3 className="counter">
                  <CountUp start={0} end={28} delay={0} duration={4}>
                    {({ countUpRef }) => (
                      <>
                        <span ref={countUpRef}></span>
                        <span>%</span>
                      </>
                    )}
                  </CountUp>
                </h3>
                <p>Revenue Increase</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-people"></i> */}
                <h3>
                  <CountUp start={0} end={97} delay={0} duration={4}>
                    {({ countUpRef }) => (
                      <>
                        <span ref={countUpRef}></span>
                        <span>%</span>
                      </>
                    )}
                  </CountUp>
                </h3>
                <p> Net Collection Rate</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-doctor-alt"></i> */}
                <h3 className="counter">
                  <CountUp start={0} end={30} delay={0} duration={4}>
                    {({ countUpRef }) => (
                      <>
                        <span style={{marginRight: "10px"}}>&lt;</span>
                        <span ref={countUpRef}></span>
                      </>
                    )}
                  </CountUp>
                </h3>
                <p>Days in AR</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-badge"></i> */}
                <h3 className="counter">
                  <CountUp start={0} end={24} delay={0} duration={4}>
                    {({ countUpRef }) => (
                      <>
                        <span ref={countUpRef}></span>
                      </>
                    )}
                  </CountUp>
                </h3>
                <p>Hour Claim Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Stats;
