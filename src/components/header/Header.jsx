import React, { useEffect, useState } from "react";
import { logo, hamburger, closeHam } from "../../assets/svgImports.js";
import "./header.css";

const Header = () => {
  const [menu, toggleMenu] = useState(false);
  const handelClick = () => {
    toggleMenu((prevMenu) => !prevMenu);
  };

  const handelLinkClick = () => {
    toggleMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menu]);

  return (
    <>
      <header className="header | container pd-top">
        <a href="/">
          <img
            className="header__logo"
            src={logo}
            alt="Positivus"
            aria-hidden="true"
          />
          <span className="visually-hidden">Go to Positivus</span>
        </a>
        <div className="header__nav-wrapper">
          <nav aria-label="Main Navigation">
            <ul className="header__nav-ul">
              <li className="header__nav-li">
                <a className="header__nav-link" href="#about-us">
                  About us
                </a>
              </li>
              <li className="header__nav-li">
                <a className="header__nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="header__nav-li">
                <a className="header__nav-link" href="#use-cases">
                  Use Cases
                </a>
              </li>
              <li className="header__nav-li">
                <a className="header__nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="header__nav-li">
                <a className="header__nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="header__nav-li">
                <a className="header__nav-link" href="#">
                  <button className="header__nav-btn">Request a quote</button>
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="header__ham-btn"
            aria-label="navigation button"
            aria-expanded="false"
          >
            {menu ? (
              <>
                <img
                  className="header__hamburger"
                  onClick={handelClick}
                  src={closeHam}
                  alt="Menu"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Close Menu</span>
              </>
            ) : (
              <>
                <img
                  className="header__hamburger"
                  onClick={handelClick}
                  src={hamburger}
                  alt="Menu"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Open Menu</span>
              </>
            )}
          </button>
        </div>
      </header>
      <div
        style={menu ? { display: "flex" } : { display: "none" }}
        className="mobile-nav__wrapper"
      >
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav__ul">
            <li className="mobile-nav__li">
              <a
                className="mobile-nav__link"
                onClick={handelLinkClick}
                href="#about-us"
              >
                About us
              </a>
            </li>
            <li className="mobile-nav__li">
              <a
                className="mobile-nav__link"
                onClick={handelLinkClick}
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="mobile-nav__li">
              <a
                className="mobile-nav__link"
                onClick={handelLinkClick}
                href="#use-cases"
              >
                Use Cases
              </a>
            </li>
            <li className="mobile-nav__li">
              <a className="mobile-nav__link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="mobile-nav__li">
              <a className="mobile-nav__link" href="#blog">
                Blog
              </a>
            </li>
            <li className="mobile-nav__li">
              <a className="mobile-nav__link" href="#">
                <button className="mobile-nav-btn | btn">
                  Request a quote
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
