import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="container section-title">
        <h2>Testimonials</h2>
      </div>

      <Swiper
        slidesPerView="2"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 2,
            slidesPerGroup: 1,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 2,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 4,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 3,
          },
        }}
        slidesPerGroup={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        slidesPerGroupSkip={0}
        modules={[Autoplay, Pagination]}
        className="testimonials-container my-5"
      >
        <SwiperSlide className="testimonial-slide">
          <div className="testimonial-item rounded-3">
            <div>
              <i style={{ fontSize: "18px" }} className="bi bi-quote"></i>
            </div>
            <p className="fst-italic">
              "Provider Concerns Solutions has revolutionized our medical
              billing process. As a pediatrician, efficiency and accuracy are
              paramount in managing my practice. With their services, I've
              experienced seamless billing procedures, timely reimbursements,
              and a significant reduction in administrative burden. Highly
              recommended!"
            </p>
            <div className="testimonial-img mb-4">
              <img src="/images/clients/client1.png" alt="Feedback" />
              <h3 className="mb-0 mt-2 fs-5">Dr. Emily Smith, MD</h3>
              <p className="text-secondary">- Pediatric</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slide">
          <div className="testimonial-item rounded-3">
            <p className="fst-italic">
              "Switching to Provider Concerns Solutions was one of the best
              decisions I made for my orthopedic practice. Their team's
              expertise in medical billing has led to increased revenue and
              improved cash flow. I no longer worry about billing errors or
              delayed payments, allowing me to focus more on patient care."
            </p>
            <div className="testimonial-img mb-4">
              <img src="/images/clients/client2.png" alt="Feedback" />
              <h3 className="mb-0 mt-2 fs-5">Dr. Michael Johnson, DO</h3>
              <p className="text-secondary">- Orthopedic Surgery</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slide">
          <div className="testimonial-item rounded-3">
            <p className="fst-italic">
              "I can't thank Provider Concerns Solutions enough for their
              exceptional medical billing services. Their attention to detail
              and commitment to compliance have streamlined our revenue cycle
              management. With their support, I've seen a noticeable enhancement
              in practice profitability. Trustworthy and professional!"
            </p>
            <div className="testimonial-img mb-4">
              <img src="/images/clients/client3.png" alt="Feedback" />
              <h3 className="mb-0 mt-2 fs-5">Dr. Sarah Patel, MD</h3>
              <p className="text-secondary">- Internal Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slide">
          <div className="testimonial-item rounded-3">
            <p className="fst-italic">
              "Provider Concerns Solutions has been instrumental in optimizing
              our laboratory billing processes. Their expertise in medical
              billing has significantly reduced claim denials and improved our
              revenue cycle efficiency. We've seen a remarkable increase in
              reimbursements and a decrease in administrative overhead since
              partnering with them. Their personalized approach and dedication
              to client satisfaction make them an invaluable asset to our lab."
            </p>
            <div className="testimonial-img mb-4">
              <img src="/images/clients/client3.png" alt="Feedback" />
              <h3 className="mb-0 mt-2 fs-5">LabTech Diagnostics</h3>
              <p className="text-secondary">- Toxicology</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
