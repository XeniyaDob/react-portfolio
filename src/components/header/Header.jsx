import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/avatar.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Xeniya</h1>
      <h5 className="text-light">Front-End Developer</h5>
      <CTA />
      <div className="test">
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
