import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const TestimonialSlider = () => {
  return (
    <>
      <div id="testimonials" className="container mb-5 section-title">
        <h2>Testimonials</h2>
      </div>
      <div className="review-area ptb-100">
        <div className="container">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slider"
          >
            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img mb-4">
                  {/* <img src="/images/clients/client1.png" alt="Feedback" /> */}
                  <h3 className="mb-0">Dr. Emily Richards, DDS</h3>
                  <p className="text-secondary">-General Dentistry</p>
                </div>
                <p className="fst-italic">
                  "Provider Concerns Dental Billing has been a game-changer for
                  my practice. Managing billing used to be a time-consuming
                  task, often leading to delays and errors. Since partnering
                  with Provider Concerns, the entire process has become
                  seamless. Their team is highly efficient, responsive, and
                  ensures that claims are processed quickly. My focus can now
                  remain solely on patient care, knowing that my billing is in
                  expert hands."
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img mb-4">
                  {/* <img src="/images/clients/client2.png" alt="Feedback" /> */}
                  <h3 className="mb-0">Dr. Mark Stevens, DMD</h3>
                  <p className="text-secondary">-Orthodontics</p>
                </div>
                <p className="fst-italic">
                  "As an orthodontist, the complexity of billing can often be
                  overwhelming, with various treatment plans and long-term care
                  schedules. Provider Concerns Dental Billing has simplified
                  this aspect of my practice. Their comprehensive understanding
                  of orthodontic billing and insurance policies has saved my
                  practice significant time and resources. The accuracy and
                  timeliness of their service have made a noticeable impact on
                  my revenue cycle management."
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img mb-4">
                  {/* <img src="/images/clients/client3.png" alt="Feedback" /> */}
                  <h3 className="mb-0">Dr. Sarah Khan, DDS, MSD</h3>
                  <p className="text-secondary">-Periodontics</p>
                </div>
                <p className="fst-italic">
                  "I was initially hesitant to outsource my billing, but
                  Provider Concerns Dental Billing proved to be the right
                  choice. Their specialized knowledge in periodontal billing has
                  ensured that every claim is handled with precision, maximizing
                  reimbursements and minimizing errors. The team’s attention to
                  detail and commitment to my practice's financial health has
                  been outstanding. I highly recommend their services to any
                  dental specialist."
                </p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
