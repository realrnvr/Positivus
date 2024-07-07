import React from "react";
import "./intro.css";

const Intro = (props) => {
  return (
    <div className="intro">
      <h2 className="intro__title">{props.intro.title}</h2>
      <p style={props.intro.paraWidth} className="intro__description">
        {props.intro.description}
      </p>
    </div>
  );
};

export default Intro;
