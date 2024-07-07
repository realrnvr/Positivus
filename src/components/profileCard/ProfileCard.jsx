import React from "react";
import "./profile-card.css";

const ProfileCard = (props) => {
  return (
    <div className="profile-card | border_box-shadow">
      <div>
        <div className="profile-card__content-wrapper">
          <div className="profile-card__pfp-svg-wrapper">
            <img
              loading="lazy"
              className="profile-card__pfp-svg"
              src={props.card.profileImg}
              alt={props.card.profileAlt}
            />
          </div>
          <div className="profile-card__text-wrapper">
            <h4 className="profile-card__name">{props.card.name}</h4>
            <p className="profile-card__position">{props.card.position}</p>
          </div>
          <div className="profile-card__linkedin-svg-wrapper">
            <img
              loading="lazy"
              className="profile-card__linkedin-svg"
              src="/linkedin.svg"
              alt="Linkedin"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <hr className="profile-card__hr" />
      <div>
        <p className="profile-card__description">{props.card.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
