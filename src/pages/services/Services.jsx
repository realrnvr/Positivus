import React from "react";
import Intro from "../../components/intro/Intro";
import Card from "../../components/card/Card";
import CTA from "../../components/cta/CTA";
import { cardData } from "../../assets/cardData";
import { introData } from "../../assets/introData";
import "./services.css";

const Services = () => {
  return (
    <section
      id="services"
      className="services | container section-mg-top"
      aria-label="Services"
    >
      <header>
        <Intro key={introData[0].id} intro={introData[0]} />
      </header>
      <div className="services__card-container | intro-content-gap">
        {cardData.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <CTA />
    </section>
  );
};

export default Services;
