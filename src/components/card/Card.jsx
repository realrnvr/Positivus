import React from "react";
import { group } from "../../assets/svgImports";
import "./card.css";

const Card = (props) => {
  return (
    <div style={props.card.cardBackground} className="card | border_box-shadow">
      <div className="card__title-wrapper">
        <h3 style={props.card.headingBackground} className="card__title">
          {props.card.headingOne}
        </h3>
        <h3 style={props.card.headingBackground} className="card__title">
          {props.card.headingTwo}
        </h3>
      </div>
      <div className="card__svg-wrapper">
        <div className="card__svg-btn-link-wrapper">
          <a id="learn-more" className="card__svg-btn-link" href="#">
            <img
              loading="lazy"
              className="card__svg-btn"
              src={group}
              alt="learn more"
            />
          </a>
          <label
            className="card__svg-btn-label"
            htmlFor="learn-more"
            style={props.card.labelColor}
          >
            Learn more
          </label>
        </div>
        <div className="card__svg-logo-wrapper">
          <img
            loading="lazy"
            className="card__svg-logo"
            style={{ width: props.card.imgWidth }}
            src={props.card.imgSrc}
            alt={props.card.imgAlt}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
