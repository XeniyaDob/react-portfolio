import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/xeniya-dobrogorskaya/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/XeniyaDob" target="_blank" rel="noreferrer">
        <FaGithubSquare />
      </a>
      <a
        href="mailto:xeniya.dobrogorskaya@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <MdOutlineEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
