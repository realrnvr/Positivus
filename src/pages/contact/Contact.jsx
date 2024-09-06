import React, { useState } from "react";
import Intro from "../../components/intro/Intro";
import { introData } from "../../assets/introData";
import "./contact.css";

const Contact = () => {
  const [radio, setRadio] = useState(true);
  const toggleRadio = () => {
    setRadio((prevRadio) => !prevRadio);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className="contact | container section-mg-top"
      aria-label="Contact Us"
    >
      <header>
        <Intro key={introData[5].id} intro={introData[5]} />
      </header>
      <div className="contact__form-wrapper intro-content-gap">
        <form onSubmit={handelSubmit} className="contact__form">
          <div className="contact__main-wrapper">
            <div className="contact__content-wrapper">
              <div className="contact__radio-wrapper">
                <div className="contact__radio">
                  <button type="button" onClick={toggleRadio}>
                    {radio ? (
                      <>
                        <img
                          className="contact__radio-svg"
                          id="say-hi"
                          src="/radio-button.svg"
                          alt="radio"
                        />
                        <span className="visually-hidden">
                          Selected to Say Hi
                        </span>
                      </>
                    ) : (
                      <>
                        <img
                          className="contact__radio-svg"
                          id="say-hi"
                          src="/radio-button-null.svg"
                          alt="radio"
                        />
                        <span className="visually-hidden">
                          Selected NOT to Say Hi
                        </span>
                      </>
                    )}
                  </button>
                  <label className="contact__label" htmlFor="say-hi">
                    Say Hi
                  </label>
                </div>
                <div className="contact__radio">
                  <button type="button" onClick={toggleRadio}>
                    {radio ? (
                      <>
                        <img
                          className="contact__radio-svg"
                          id="get-a-quote"
                          src="/radio-button-null.svg"
                          alt="radio"
                        />
                        <span className="visually-hidden">
                          Selected NOT to Get a Quote
                        </span>
                      </>
                    ) : (
                      <>
                        <img
                          className="contact__radio-svg"
                          id="get-a-quote"
                          src="/radio-button.svg"
                          alt="radio"
                        />
                        <span className="visually-hidden">
                          Selected to Get a Quote
                        </span>
                      </>
                    )}
                  </button>
                  <label className="contact__label" htmlFor="get-quote">
                    Get a Quote
                  </label>
                </div>
              </div>
              <div className="contact__input-content-wrapper">
                <div className="contact__input-wrapper">
                  <label className="contact__label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="contact__input"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="contact__input-wrapper">
                  <label className="contact__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="contact__input"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="contact__input-wrapper">
                  <label className="contact__label" htmlFor="msg">
                    Message
                  </label>
                  <textarea
                    className="contact__input contact__textarea"
                    type="message"
                    name="message"
                    id="msg"
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="contact__btn | btn" type="submit">
                Send Message
              </button>
            </div>
          </div>
          <div className="contact__illustration-svg-wrapper">
            <img
              className="contact__illustration-svg lz-loading loading"
              src="/1px.webp"
              data-src="/Illustration-cropped.svg"
              alt="Illustration"
              aria-hidden="true"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
