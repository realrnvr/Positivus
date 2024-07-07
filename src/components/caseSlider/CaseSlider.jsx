// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./case-slider.css";

const Slider = () => {
  return (
    <div className="slider | section-mg-top">
      <Swiper
        spaceBetween={-20}
        slidesPerView={1}
        breakpoints={{
          425: {
            spaceBetween: -30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -20,
          },
        }}
      >
        <SwiperSlide>
          <div className="slider__item">
            <p className="slider__description">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase.
            </p>
            <div className="slider__link-svg-wrapper">
              <a className="slider__link" href="#">
                <p>Learn more</p>
              </a>
              <img src="/arrow.svg" alt="learn more" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item">
            <p className="slider__description">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase.
            </p>
            <div className="slider__link-svg-wrapper">
              <a className="slider__link" href="#">
                <p>Learn more</p>
              </a>
              <img src="/arrow.svg" alt="learn more" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item">
            <p className="slider__description">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase.
            </p>
            <div className="slider__link-svg-wrapper">
              <a className="slider__link" href="#">
                <p>Learn more</p>
              </a>
              <img src="/arrow.svg" alt="learn more" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
