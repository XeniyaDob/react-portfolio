import React from "react";
import CV from "../../assets/blank.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        target="_blank"
        rel="noreferrer"
        onClick={"are you sure you want to download this file?"}
        className="btn"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};

export default CTA;
