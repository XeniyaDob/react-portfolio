import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date();

  const thisYear = today.getFullYear();



  return (
    <footer>

      <a href="#header" className="footer_logo">
        Xeniya Dobrogorskaya Portfolio &copy;{thisYear}
      </a>
    </footer>
  );
};

export default Footer;

