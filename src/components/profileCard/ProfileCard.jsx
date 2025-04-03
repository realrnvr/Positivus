import "./profile-card.css";
import PropTypes from "prop-types";

const ProfileCard = (props) => {
  return (
    <div className="profile-card | border_box-shadow">
      <div>
        <div className="profile-card__content-wrapper">
          <div className="profile-card__pfp-svg-wrapper">
            <img
              className="profile-card__pfp-svg lz-loading loading"
              src="/t-1px.webp"
              data-src={props.card.profileImg}
              alt={props.card.profileImgAlt}
            />
          </div>
          <div className="profile-card__text-wrapper">
            <p className="profile-card__name">{props.card.name}</p>
            <p className="profile-card__position">{props.card.position}</p>
          </div>
          <a className="profile-card__linkedin-svg-wrapper" href="#">
            <img
              className="profile-card__linkedin-svg"
              src="/linkedin.svg"
              alt="Linkedin"
              aria-hidden="true"
            />
            <span className="visually-hidden">Go to Linkedin</span>
          </a>
        </div>
      </div>
      <hr className="profile-card__hr" />
      <div>
        <p className="profile-card__description">{props.card.description}</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  card: PropTypes.object,
};

export default ProfileCard;
