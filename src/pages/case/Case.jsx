import React from "react";
import Intro from "../../components/intro/Intro";
import CaseSlider from "../../components/caseSlider/CaseSlider";
import { introData } from "../../assets/introData";
import "./case.css";

const Case = () => {
  return (
    <>
      <section
        id="use-cases"
        className="case | container section-mg-top"
        aria-label="Case Studies"
      >
        <header>
          <Intro key={introData[1].id} intro={introData[1]} />
        </header>
        <div className="case__slider-container | intro-content-gap">
          <div className="case__slider-item">
            <p className="case__description">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div className="case__link-wrapper">
              <a className="case__link" href="#">
                <p>Learn more</p>
              </a>
              <img loading="lazy" src="/arrow.svg" alt="Learn more" />
            </div>
          </div>
          <div className="case__vr"></div>
          <div className="case__slider-item">
            <p className="case__description">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div className="case__link-wrapper">
              <a className="case__link" href="#">
                <p>Learn more</p>
              </a>
              <img loading="lazy" src="/arrow.svg" alt="Learn more" />
            </div>
          </div>
          <div className="case__vr"></div>
          <div className="case__slider-item">
            <p className="case__description">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div className="case__link-wrapper">
              <a className="case__link" href="#">
                <p>Learn more</p>
              </a>
              <img loading="lazy" src="/arrow.svg" alt="Learn more" />
            </div>
          </div>
        </div>
      </section>
      <CaseSlider />
    </>
  );
};

export default Case;
