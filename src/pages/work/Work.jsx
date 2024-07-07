import React from "react";
import Intro from "../../components/intro/Intro";
import Toggle from "../../components/toggle/Toggle";
import { introData } from "../../assets/introData";
import { toggleData } from "../../assets/toggleData";
import "./work.css";

const Work = () => {
  return (
    <section
      className="work | container section-mg-top"
      aria-label="Our Working Process"
    >
      <header>
        <Intro key={introData[2].id} intro={introData[2]} />
      </header>
      <div className="work__toggle-container | intro-content-gap">
        {toggleData.map((toggle) => {
          return <Toggle key={toggle.id} toggle={toggle} />;
        })}
      </div>
    </section>
  );
};

export default Work;
