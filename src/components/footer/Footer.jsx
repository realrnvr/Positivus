import React from "react";
import { logo } from "../../assets/svgImports";
import "./footer.css";

const Footer = () => {
  const clickSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer footer-container | section-mg-top">
      <div className="footer__container-wrapper">
        <div className="footer__header-wrapper">
          <a className="footer__svg-logo-wrapper" href="/">
            <img className="footer__svg-logo" src={logo} alt="Positivus" />
            <span className="visually-hidden">Go to Positivus</span>
          </a>
          <div>
            <nav>
              <ul className="footer__ul">
                <li>
                  <a className="footer__link" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__social-container-lg">
            <div>
              <a href="#">
                <img
                  className="footer__social-svg"
                  src="/icon-1.svg"
                  alt="Linkedin"
                />
                <span className="visually-hidden">Go to Linkedin</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="footer__social-svg"
                  src="/icon-2.svg"
                  alt="Facebook"
                />
                <span className="visually-hidden">Go to Linkedin</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="footer__social-svg"
                  src="/icon-3.svg"
                  alt="Twitter"
                />
                <span className="visually-hidden">Go to Linkedin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__contact-container">
          <div className="footer__text-wrapper">
            <p className="footer__title">Contact us:</p>
            <p className="footer__info">Email: info@positivus.com</p>
            <p className="footer__info">Phone: 555-567-8901</p>
            <p className="footer__info">
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>

          <form onSubmit={clickSubmit} className="footer__form">
            <input className="footer__input" type="text" placeholder="Email" />
            <button className="footer__btn" type="submit">
              Subscribe to news
            </button>
          </form>
        </div>
        <div className="footer__social-container-sm">
          <div>
            <a href="#">
              <img
                className="footer__social-svg"
                src="/icon-1.svg"
                alt="Linkedin icon"
              />
              <span className="visually-hidden">Go to Linkedin</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className="footer__social-svg"
                src="/icon-2.svg"
                alt="Facebook icon"
              />
              <span className="visually-hidden">Go to Linkedin</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className="footer__social-svg"
                src="/icon-3.svg"
                alt="Twitter logo"
              />
              <span className="visually-hidden">Go to Linkedin</span>
            </a>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="footer__bottom-text-wrapper">
          <p className="footer__info">
            &copy; 2023 Positivus. All Rights Reserved.
          </p>
          <a className="footer__link" href="#">
            <p className="footer__info">Privacy Policy</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
