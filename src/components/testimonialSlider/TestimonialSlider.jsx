import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial-slider.css";

const TestimonialSlider = () => {
  return (
    <div className="tslider | section-mg-top">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        pagination={{
          el: ".swiper-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} custom-pagination-bullet" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" />
                      </svg>
                    </span>`;
          },
          clickable: true,
        }}
        breakpoints={{
          320: {
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: -300,
            centeredSlides: true,
            loop: true,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: -300,
            centeredSlides: true,
            loop: true,
          },
          1280: {
            slidesPerView: 1,
            spaceBetween: -500,
            centeredSlides: true,
            loop: true,
          },
          1440: {
            slidesPerView: 1,
            spaceBetween: -700,
            centeredSlides: true,
            loop: true,
          },
        }}
      >
        <SwiperSlide>
          <div className="tslider__item-wrapper">
            <div className="tslider__item">
              <p className="tslider__description">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="tslider__text-wrapper">
                <p className="tslider__title">John Smith</p>
                <p className="tslider__position">
                  Marketing Director at XYZ Corp
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tslider__item-wrapper">
            <div className="tslider__item">
              <p className="tslider__description">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="tslider__text-wrapper">
                <p className="tslider__title">John Smith</p>
                <p className="tslider__position">
                  Marketing Director at XYZ Corp
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tslider__item-wrapper">
            <div className="tslider__item">
              <p className="tslider__description">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="tslider__text-wrapper">
                <p className="tslider__title">John Smith</p>
                <p className="tslider__position">
                  Marketing Director at XYZ Corp
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tslider__item-wrapper">
            <div className="tslider__item">
              <p className="tslider__description">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="tslider__text-wrapper">
                <p className="tslider__title">John Smith</p>
                <p className="tslider__position">
                  Marketing Director at XYZ Corp
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tslider__item-wrapper">
            <div className="tslider__item">
              <p className="tslider__description">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="tslider__text-wrapper">
                <p className="tslider__title">John Smith</p>
                <p className="tslider__position">
                  Marketing Director at XYZ Corp
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev slider__prev">
          <img src="/next.svg" alt="Previous slide" />
        </div>
        <div className="swiper-button-next slider__next">
          <img src="/next.svg" alt="Next slide" />
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
