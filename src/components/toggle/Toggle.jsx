import React, { useState } from "react";
import "./toggle.css";

const Toggle = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div
      className="toggle | border_box-shadow"
      style={
        toggle
          ? { borderRadius: "30px", backgroundColor: "#B9FF66" }
          : { borderRadius: "100vmax", backgroundColor: "#F3F3F3" }
      }
    >
      <ul className="toggle__list">
        <li className="toggle__list-items">
          <div className="toggle__content-wrapper">
            <div className="toggle__heading-wrapper">
              <h1 className="toggle__title">{props.toggle.no}</h1>
              <p className="toggle__lable">{props.toggle.lable}</p>
            </div>
            <div className="toggle__svg-btn-wrapper">
              <button onClick={toggleClick}>
                {toggle ? (
                  <>
                    <img
                      className="toggle__svg-btn minus"
                      src="/minus-icon.svg"
                      alt="Minus"
                    />
                    <span className="visually-hidden">Close Drop Down</span>
                  </>
                ) : (
                  <>
                    <img
                      className="toggle__svg-btn plus"
                      src="/plus-icon.svg"
                      alt="Plus"
                    />
                    <span className="visually-hidden">Drop Down</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <div
            className="toogle__hr-description-wrapper"
            style={toggle ? { display: "block" } : { display: "none" }}
          >
            <hr className="toggle__hr" />
            <p className="toggle__description">{props.toggle.description}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Toggle;
