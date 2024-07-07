import React from "react";
import {
  frame,
  amazon,
  dribblbe,
  hubspot,
  notion,
  netflix,
  zoom,
} from "../../assets/svgImports.js";
import "./home.css";

const Home = () => {
  return (
    <section className="hero | container content-mg-top" aria-label="Home">
      <div className="hero__sm-screen">
        <h1 className="hero__title">
          Navigating the <br /> digital landscape for success
        </h1>
        <div className="hero__svg-wrapper">
          <img
            className="hero__svg"
            src={frame}
            alt="frame"
            aria-hidden="true"
          />
        </div>
        <p className="hero__description">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <a href="#">
          <button className="hero__btn | btn">Book a consultation</button>
        </a>
      </div>
      <div className="hero__lg-screen">
        <div className="hero__content-wrapper">
          <h1 className="hero__title">
            Navigating the <br /> digital landscape for success
          </h1>
          <p className="hero__description">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <a href="#">
            <button className="hero__btn | btn">Book a consultation</button>
          </a>
        </div>
        <div>
          <img className="hero__svg" src={frame} alt="Frame" />
        </div>
      </div>
      <div className="hero__carousel | content-mg-top">
        <img className="hero__carousel-logo" src={amazon} alt="Amazon" />
        <img className="hero__carousel-logo" src={dribblbe} alt="Dribblbe" />
        <img className="hero__carousel-logo" src={hubspot} alt="Hubspot" />
        <img className="hero__carousel-logo" src={notion} alt="Notion" />
        <img className="hero__carousel-logo" src={netflix} alt="Netflix" />
        <img className="hero__carousel-logo" src={zoom} alt="Zoom" />
      </div>
    </section>
  );
};

export default Home;
