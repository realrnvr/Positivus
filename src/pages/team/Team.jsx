import React from "react";
import Intro from "../../components/intro/Intro";
import ProfileCard from "../../components/profileCard/ProfileCard";
import { introData } from "../../assets/introData";
import { profileCardData } from "../../assets/profileCardData";
import "./team.css";

const Team = () => {
  return (
    <section
      id="about-us"
      className="team | container section-mg-top"
      aria-label="Team"
    >
      <header>
        <Intro key={introData[3].id} intro={introData[3]} />
      </header>
      <div className="team___profile-card-container | intro-content-gap">
        {profileCardData.map((card) => {
          return <ProfileCard key={card.id} card={card} />;
        })}
      </div>
      <div>
        <a href="#">
          <button className="team__btn | btn">See all team</button>
        </a>
      </div>
    </section>
  );
};

export default Team;
