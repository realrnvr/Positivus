import React from "react";
import Intro from "../../components/intro/Intro";
const TestimonialSlider = React.lazy(() =>
  import("../../components/testimonialSlider/TestimonialSlider")
);
import { introData } from "../../assets/introData";

import "./testimonial.css";

const Testimonials = () => {
  return (
    <section
      className="testimonial | container section-mg-top"
      aria-label="Testimonials"
    >
      <header>
        <Intro key={introData[4].id} intro={introData[4]} />
      </header>
      <div className="testimonial__slider-wrapper | intro-content-gap">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
