import React from "react";
import { illustration } from "../../assets/svgImports";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta__content-wrapper">
        <h3 className="cta__title">Let's make things happen</h3>
        <p className="cta__description">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="cta__btn cta__sm-screen | btn">
          Get your proposal
        </button>
        <button className="cta__btn cta__lg-screen | btn">
          Get your free proposal
        </button>
      </div>
      <div className="cta__svg-wrapper">
        <img
          loading="lazy"
          className="cta__svg"
          src={illustration}
          alt="Call to action"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default CTA;
