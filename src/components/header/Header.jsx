import React from "react";
import "./Header.css";
import CTA from "./CTA";
import image from "../../assets/flower.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header id="header" className="container header_container">
          <div className="me">
            <h5 className="tracking-in-contract-bck">Hi I'm</h5>
            <h1 className="tracking-in-contract-bck">Xeniya</h1>
            <h5 className="tracking-in-contract-bck">Front-End Developer</h5>
            <CTA />
            <HeaderSocials />
            <a href="#contact" className="scroll_down">
              Scroll Down
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
