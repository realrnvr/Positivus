import React from "react";
import {
  amazon,
  dribblbe,
  hubspot,
  notion,
  netflix,
  zoom,
} from "../../assets/svgImports.js";
import "./carousel.css";

const Carousel = () => {
  return (
    <section className="carousel | content-mg-top">
      <div className="carousel__svg-wrapper">
        <img
          style={{ "--n": 1 }}
          className="carousel__svg-r-to-l"
          src={amazon}
          alt="Amazon"
        />
        <img
          style={{ "--n": 2 }}
          className="carousel__svg-r-to-l"
          src={dribblbe}
          alt="Dribblbe"
        />
        <img
          style={{ "--n": 3 }}
          className="carousel__svg-r-to-l"
          src={hubspot}
          alt="Hubspot"
        />
      </div>
      <div className="carousel__svg-wrapper">
        <img
          style={{ "--n": 1 }}
          className="carousel__svg-l-to-r"
          src={notion}
          alt="Notion"
        />
        <img
          style={{ "--n": 2 }}
          className="carousel__svg-l-to-r"
          src={netflix}
          alt="Netflix"
        />
        <img
          style={{ "--n": 3 }}
          className="carousel__svg-l-to-r"
          src={zoom}
          alt="Zoom"
        />
      </div>
    </section>
  );
};

export default Carousel;
