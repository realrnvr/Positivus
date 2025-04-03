import "./card.css";
import { group } from "../../assets/svgImports";
import PropTypes from "prop-types";

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
          <a
            id={`learn-more-${props.card.id}`}
            className="card__svg-btn-link"
            href="#"
          >
            <img
              className="card__svg-btn"
              src={group}
              alt={`learn more`}
              aria-hidden="true"
            />
            <span className="visually-hidden">Learn More</span>
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
            className="card__svg-logo lz-loading loading"
            data-src={props.card.imgSrc}
            src="/t-1px.webp"
            alt={props.card.imgAlt}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
