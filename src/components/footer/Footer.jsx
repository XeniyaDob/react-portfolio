import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date();

  const thisYear = today.getFullYear();


  return (
    <footer>
      <a href="#" className="footer_logo">
        XD &copy;{thisYear}
      </a>
    </footer>
  );
};
