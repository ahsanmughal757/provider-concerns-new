import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";
import Link from "next/link";

import { motion } from "framer-motion";

const DentalSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span className="text-white h5 ${className}">0${index + 1}</span>`,
        }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="home-slider relative"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slide-3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      {/* <img
                        // src="/images/home-one/doctors-slide-1.png"
                        alt="Shape"
                      /> */}
                    </div>

                    <motion.h1
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: 0.3,
                          ease: "easeIn",
                        },
                        type: "spring",
                      }}
                    >
                      Expert Dental Billing Services
                    </motion.h1>
                    <motion.p
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: 0.3,
                          ease: "easeIn",
                        },
                        type: "spring",
                      }}
                      className="lead"
                    >
                      We revolutionize dental practices by ensuring financial
                      success through innovative billing solutions, optimizing
                      billing procedures and enhancing profits.{" "}
                    </motion.p>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: {
                          duration: 0.3,
                          delay: 0.3,
                          // ease: "easeIn",
                        },
                        type: "spring",
                        // stiffness: 100,
                      }}
                      className="common-btn"
                    >
                      <Link href="tel:+18882852880">Click to Call</Link>
                      <Link href="#contact" className="cmn-btn-right">
                        Make Appointment
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DentalSlider;
