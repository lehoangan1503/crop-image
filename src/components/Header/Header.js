import React from "react";
import "../../styles/Header.scss";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
const Header = () => {
  const handleOnClick = () => {
    const main = document.getElementById("Main");
    main.style.display = "block";
  };
  return (
    <div className="Header">
      <div className="header-container">
        <div className="logo-container">
          <FaReact></FaReact>
        </div>
        <div className="button-link-container">
          <div className="button">
            <a href="#" onClick={handleOnClick}>
              PFP Maker
            </a>
          </div>
          <div className="button">
            <a href="#">
              <BsTwitter></BsTwitter>
            </a>
          </div>
          <div className="button">
            <a href="#">
              <BsDiscord></BsDiscord>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
